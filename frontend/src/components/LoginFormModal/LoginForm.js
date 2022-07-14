import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import { useHistory } from 'react-router-dom'

function EditForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const loginGuestUser = e => {
    e.preventDefault()
    dispatch(sessionActions.loginGuest())
    history.push('/')
  }

  return (
    <div className="form-container">
      <h1>Login to your SoundCloud account</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            placeholder="Username or Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        <button className="login-button" type="submit">Login</button>
      </form>
      <form onSubmit={loginGuestUser}>
        <p className='or'>----------------or----------------</p>
        <button className='login-guest-button' type='submit'>Login as Guest</button>
      </form>
    </div>
  );
}

export default EditForm;
