import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as albumActions from '../../store/albums'

function UploadAlbumForm({closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState("Submit")

  const reset = () => {
    setTitle("")
    setDescription("")
    setPreviewImage(null)
    setSubmit("Submit")
    setErrors([])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setSubmit(<div className="fa fa-cog fa-spin"></div>)
    setDisabled(true)

    dispatch(albumActions.uploadAlbum({
        title,
        description,
        imageUrl: previewImage
    }))
    .then(() => {
      reset()
      setDisabled(false)
      closeModal()
    })
    .catch(async (res) => {
      const data = await res.json()
      if (data && data.errors) {
        setDisabled(false)
        setSubmit("Submit")
        setErrors(Object.values(data.errors))
      }
    });
  }

  const updateFile = e => {
    const file = e.target.files[0];
    if (file) setPreviewImage(file)
  }

  return (
    <div className="form-container">
      <h1>Create a new Album</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <p>Album Preview Image:</p>
          <input
            type="file"
            name='previewImage'
            onChange={updateFile}
            required
          />
        <button disabled={disabled} className="login-button" type="submit">{submit}</button>
      </form>
    </div>
  );
}

export default UploadAlbumForm;
