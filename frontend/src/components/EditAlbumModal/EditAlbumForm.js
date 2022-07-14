import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditAlbumForm.css'
import * as albumActions from '../../store/albums'

function EditAlbumForm({album, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null)
  const [errors, setErrors] = useState([]);
  const [disabled, setDisabled] = useState(false)

  const reset = () => {
    setTitle("")
    setDescription("")
    setPreviewImage(null)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setDisabled(true)
    dispatch(albumActions.updateAlbum({
        id: album.id,
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
    <div className="form-container">
      <h1>Edit Album</h1>
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
          <p>Preview Image:</p>
          <input
            type="file"
            name='previewImage'
            onChange={updateFile}
            required
          />
        <button disabled={disabled} className="login-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditAlbumForm;
