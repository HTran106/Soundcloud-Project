import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='login-button'>
          <LoginFormModal />
          </div>
          <div className='create-account-button'>
          <SignupFormModal />
        </div>
        <div className='for-creators-button'>
          <button>For Creators</button>
        </div>
      </>
    );
  }

  return (
    <div className='banner-container'>
      {isLoaded && sessionLinks}
    </div>
    // <ul>
    //   <li>
    //     {/* <NavLink exact to="/">Home</NavLink> */}
    //     {isLoaded && sessionLinks}
    //   </li>
    // </ul>
  );
}

export default Navigation;
