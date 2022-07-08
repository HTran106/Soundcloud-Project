import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import * as albumActions from '../../store/albums'

function UploadAlbumForm({song}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("")
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const [toggle, setToggle] = useState(false)

  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {

  },[toggle])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(albumActions.uploadAlbum({
        title,
        description,
        imageUrl: previewImage
    }))

    setToggle(!toggle)
    history.push('/albums')
  }



  return (
    <>
      <h1>Add an Album</h1>
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
      {/* <form onSubmit={loginGuestUser}>
        <p className='or'>----------------or----------------</p>
        <button className='login-guest-button' type='submit'>Login as Guest</button>
      </form> */}
    </>
  );
}

export default UploadAlbumForm;
