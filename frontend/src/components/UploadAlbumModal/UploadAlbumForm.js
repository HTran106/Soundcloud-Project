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

  const reset = () => {
    setTitle("")
    setDescription("")
    setPreviewImage(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
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
      if (data && data.errors) setErrors(Object.values(data.errors))
    });
  }

  const updateFile = e => {
    const file = e.target.files[0];
    if (file) setPreviewImage(file)
  }

  return (
    <>
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
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <input
            type="file"
            name='previewImage'
            onChange={updateFile}
            required
          />
        <button disabled={disabled} className="login-button" type="submit">Submit</button>
      </form>
    </>
  );
}

export default UploadAlbumForm;
