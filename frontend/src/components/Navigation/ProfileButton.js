import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom'

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
              <a>Likes</a>
            </li>
            <li>
              <a>Stations</a>
            </li>
            <li>
              <a>Who to follow</a>
            </li>
            <li>
              <a>Try Pro</a>
            </li>
            <li>
              <a>Tracks</a>
            </li>
            <li>
              <a>Distribute</a>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
