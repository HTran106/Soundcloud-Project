import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSongForm.css'
import * as songActions from '../../store/song'

function EditSongForm({song, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("")
  const [url, setUrl] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault()
    setDisabled(true)

    dispatch(songActions.updateSong({
        id: song?.id,
        albumId: song?.albumId,
        title,
        description,
        url,
        imageUrl: previewImage
    }))
    .then(() => {
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
            type="file"
            name='url'
            onChange={updateUrlFile}
            required
          />
          <input
            type="file"
            name='imageUrl'
            onChange={updatePreviewImageFile}
            required
          />
        <button disabled={disabled} className="login-button" type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditSongForm;
