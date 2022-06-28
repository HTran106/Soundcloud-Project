import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import * as sessionActions from '../../store/session';

const MoreMenu = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
            <button onClick={openMenu} className='more-button'>
            </button>
            {showMenu && (
                <div className="more-dropdown">
                    <ul style={{listStyleType:'none'}}>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Legal</a>
                        </li>
                        <li>
                            <a>Copyright</a>
                        </li>
                        <li>
                            <a>Get SoundCloud Go+</a>
                        </li>
                        <li>
                            <a>Mobile apps</a>
                        </li>
                        <li>
                            <a>For Creators</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Jobs</a>
                        </li>
                        <li>
                            <a>Developers</a>
                        </li>
                        <li>
                            <a>Support</a>
                        </li>
                        <li>
                            <a>Keyboard shortcuts</a>
                        </li>
                        <li>
                            <a>Subscription</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a onClick={logout}>Sign out</a>
                        </li>

                    </ul>
                </div>
            )}

        </div>
    )
}

export default MoreMenu
