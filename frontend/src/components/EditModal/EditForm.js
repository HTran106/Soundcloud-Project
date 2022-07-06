import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './EditForm.css'
import { useHistory } from 'react-router-dom'

function EditForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("")
  const [previewImage, setPreviewImage] = useState("")
  const [errors, setErrors] = useState([]);
  const history = useHistory()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

  const loginGuestUser = e => {
    e.preventDefault()
    dispatch(sessionActions.loginGuest())
    history.push('/')
  }

  return (
    <>
      <h1>Edit Song</h1>
      <form>
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
      {/* <form onSubmit={loginGuestUser}>
        <p className='or'>----------------or----------------</p>
        <button className='login-guest-button' type='submit'>Login as Guest</button>
      </form> */}
    </>
  );
}

export default EditForm;
