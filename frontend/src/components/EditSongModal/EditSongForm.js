import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSongForm.css'
import * as songActions from '../../store/song'

function EditSongForm({song, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null)
  const [url, setUrl] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState("Submit")

  const reset = () => {
    setTitle("")
    setDescription("")
    setPreviewImage(null)
    setUrl(null)
    setSubmit("Submit")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setDisabled(true)
    setSubmit(<div className="fa fa-cog fa-spin"></div>)

    dispatch(songActions.updateSong({
        id: song?.id,
        albumId: song?.albumId,
        title,
        description,
        url,
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

    const updateUrlFile = e => {
    const file = e.target.files[0];
    if (file) setUrl(file)
    }

    const updatePreviewImageFile = e => {
    const file = e.target.files[0];
    if (file) setPreviewImage(file)
    }

  return (
    <div className="form-container">
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
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
          <p>Song:</p>
          <input
            type="file"
            name='url'
            onChange={updateUrlFile}
            required
          />
          <p>Preview Image:</p>
          <input
            type="file"
            name='imageUrl'
            onChange={updatePreviewImageFile}
            required
          />
        <button disabled={disabled} className="login-button" type="submit">{submit}</button>
      </form>
    </div>
  );
}

export default EditSongForm;
