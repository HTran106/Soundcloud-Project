import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
// import SearchBarComponent from '../SearchBar';
import HomeButton from './HomeButton';
import SongsButton from './SongsButton';
import AlbumsButton from './AlbumsButton';
import SearchBar from './SearchBar';
// import PlaylistsButton from './PlaylistsButton';
import MySongsButton from './MySongsButton';
import MyAlbumsButton from './MyAlbumsButton';
// import HomePageComponent from '../HomePageComponent/HomePageComponent';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="profile-banner-container">
          <HomeButton />
          <SongsButton />
          <AlbumsButton />
          <SearchBar />
          <MyAlbumsButton />
          <MySongsButton />
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='banner-container'>
          <div className='logo-container'>
            <div className='logo'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII=' alt='logo'></img>
                <h4>SOUNDCLOUD</h4>
            </div>
            <div className='buttons-container'>
              <div className='signin-button'>
                <LoginFormModal />
              </div>
              <div className='create-account-button'>
                <SignupFormModal />
              </div>
              {/* <div className='for-creators-button'>
                <button>For Creators</button>
              </div> */}
            </div>
          </div>
          <div className='banner-words'>
            <p className='discover'>Discover more with SoundCloud Go+</p>
            <p className='growing'>SoundCloud Go+ lets you listen offline, ad-free, with over 150 million tracks - and growing.</p>
          </div>
        </div>
        <h1 style={{fontSize: "48px"}}>About Soundcloud Clone</h1>
        <div className='about-us'>
          <p>
            As the world's largest music and audio platform,
            SoundCloud-Clone lets people discover and enjoy the greatest selection of music from the most diverse creator community on earth.
            Since launching in 2008, the platform has become renowned for its unique content and features,
            including the ability to share music and connect directly with artists, as well as unearth breakthrough tracks,
            raw demos, podcasts and more. This is made possible by an open platform that directly connects creators and their fans across the globe.
            Music and audio creators use SoundCloud-Clone to both share and monetise their content with a global audience,
            as well as receive detailed stats and feedback from the SoundCloud community.
          </p>
        </div>
        {/* <SearchBarComponent /> */}
      </>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
