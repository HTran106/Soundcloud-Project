import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [previewImage, setPreviewImage] = useState(null)
  const [disabled, setDisabled] = useState(false)

  if (sessionUser) return <Redirect to="/" />;

  const reset = () => {
    setFirstName("")
    setLastName("")
    setUsername("")
    setPassword("")
    setConfirmPassword("")
    setPreviewImage(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true)
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password, previewImage }))
        .then(() => {
          setDisabled(false)
          reset()
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(Object.values(data.errors));
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const updateFile = e => {
    const file = e.target.files[0];
    if (file) setPreviewImage(file)
  }

  return (
    <div className="form-container">
      <h1>Create your SoundCloud account</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <input
            type="text"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>Profile Picture:</p>
          <input
            type="file"
            onChange={updateFile}
            />
        <button disabled={disabled} className="signup-button" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
