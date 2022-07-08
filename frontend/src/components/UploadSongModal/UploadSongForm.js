import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as songActions from '../../store/song'

function UploadSongForm({album, closeModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("")
  const [previewImage, setPreviewImage] = useState("")
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
    closeModal()
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
      {/* <form onSubmit={loginGuestUser}>
        <p className='or'>----------------or----------------</p>
        <button className='login-guest-button' type='submit'>Login as Guest</button>
      </form> */}
    </>
  );
}

export default UploadSongForm;
