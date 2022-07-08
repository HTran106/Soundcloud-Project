
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
// import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Switch>
//           <Route path="/login">
//             <LoginFormPage />
//           </Route>
//           <Route path="/users/signup">
//             <SignupFormPage />
//           </Route>
//         </Switch>
//       )}
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SongsComponent from "./components/SongsComponent";
import * as songsActions from './store/song'
import SongDetailsComponent from "./components/SongDetailsComponent";
import HomePageComponent from "./components/HomePageComponent/HomePageComponent";
import AlbumsComponent from "./components/AlbumsComponent";
import AlbumDetailsComponent from "./components/AlbumDetailsComponent";
import * as albumActions from './store/albums'
import MySongsComponent from "./components/MySongsComponent";
import MyAlbumsComponent from "./components/MyAlbumsComponent";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(songsActions.fetchAllSongs())
    dispatch(albumActions.fetchAllAlbums())
  }, [dispatch]);

  const songs = Object.values(useSelector(state => state.songs))
  const albums = Object.values(useSelector(state => state.albums))
  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className="page">
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path='/albums/:albumId'>
          <AlbumDetailsComponent />
        </Route>
        <Route path='/albums'>
          <AlbumsComponent />
        </Route>
        <Route path='/my/albums'>
          <MyAlbumsComponent albums={albums}/>
        </Route>
        <Route path='/my/songs'>
          <MySongsComponent songs={songs}/>
        </Route>
        <Route path='/songs/:songId'>
          <SongDetailsComponent songs={songs} />
        </Route>
        <Route path='/songs'>
          <SongsComponent />
        </Route>
        <Route exact path="/">
          {sessionUser && <HomePageComponent />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
