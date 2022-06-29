import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom'

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
      history.push('/')
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
              <a href="/" onClick={logout}>Sign out</a>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
