import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditAlbumForm.css'
import * as albumActions from '../../store/albums'

function EditAlbumForm({album, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("")
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(albumActions.updateAlbum({
        id: album.id,
        title,
        description,
        imageUrl: previewImage
    }))
    .then(() => {closeModal()})
    .catch(async (res) => {
      const data = await res.json()
      if (data && data.errors) setErrors(Object.values(data.errors))
    });
  }

  return (
    <>
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
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <input
            type="url"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            placeholder="Preview Image Url"
          />
        <button className="login-button" type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditAlbumForm;
