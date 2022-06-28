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
            <li className="l1">
              <a href="/my/info">Profile</a>
            </li>
            <li className="l2">
              <a>Likes</a>
            </li>
            <li className="l3">
              <a>Stations</a>
            </li>
            <li className="l4">
              <a>Who to follow</a>
            </li>
            <li className="l5">
              <a>Try Pro</a>
            </li>
            <li className="l6">
              <a>Tracks</a>
            </li>
            <li className="l7">
              <a>Distribute</a>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
