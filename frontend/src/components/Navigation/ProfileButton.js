import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


    const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    };

  return (
    <div>
      <button onClick={openMenu} className="profile-button">
        {user.username}
        <span>↓</span>
      </button>
      {showMenu && (
        <div className="dropdown">
          <nav>
            <li>
              <a href="/my/info">Profile</a>
            </li>
            <li>
              <a onClick={logout}>Sign out</a>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
