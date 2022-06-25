import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
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
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (password !== confirmPassword) setErrors(['Confirm Password field must be the same as the Password field'])

    if (!errors.length) {
      const result =  await dispatch(
        sessionActions.signup({ firstName, lastName, email, username, password })
      )

      if(result.id){
        history.push('/')
      } else {
        setErrors(result)
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Create your SoundCloud account</h1>
      <form onSubmit={handleSubmit}>
        <ul>

          {errors.map((error, idx) => <li className="errors-list" key={idx}>{error}</li>)}
            {/* hasSubmitted && errors.map((error, i) => <li key={i}>{error}</li>) */}

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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        <button className="signup-button" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
