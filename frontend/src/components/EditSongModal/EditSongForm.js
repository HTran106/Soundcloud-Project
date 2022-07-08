import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSongForm.css'
import * as songActions from '../../store/song'

function EditSongForm({song, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("")
  const [previewImage, setPreviewImage] = useState("")
  const [errors, setErrors] = useState([]);

  console.log(song)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(songActions.updateSong({
      id: song.id,
      albumId: song.albumId,
      title,
      description,
      imageUrl: previewImage
    }))
    closeModal()
  }

  return (
    <>
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
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="Song Url"
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

export default EditSongForm;
