import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as songActions from '../../store/song'

function UploadSongForm({album, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrlFile] = useState(null)
  const [previewImage, setPreviewImageFile] = useState(null)
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(songActions.uploadSong({
        title,
        description,
        url,
        imageUrl: previewImage
    }, album.id))
    .then(() => {closeModal()})
    .catch(async (res) => {
      const data = await res.json()
      if (data && data.errors) setErrors(Object.values(data.errors))
    });
  }

    const updateUrlFile = e => {
    const file = e.target.files[0];
    if (file) setUrlFile(file)
    }

    const updatePreviewImageFile = e => {
    const file = e.target.files[0];
    if (file) setPreviewImageFile(file)
  }

  return (
    <>
      <h1>Add Song to this Album</h1>
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
            onChange={updateUrlFile}
            required
          />
          <input
            type="file"
            onChange={updatePreviewImageFile}
            required
          />
        <button className="login-button" type="submit">Submit</button>
      </form>
    </>
  );
}

export default UploadSongForm;
