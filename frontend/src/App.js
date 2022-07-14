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
import SearchComponent from "./components/SearchComponent";


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
        <Route exact path='/search'>
          <SearchComponent />
        </Route>
        <Route exact path='/albums/:albumId'>
          <AlbumDetailsComponent albums={albums}/>
        </Route>
        <Route exact path='/albums'>
          <AlbumsComponent />
        </Route>
        <Route exact path='/my/albums'>
          <MyAlbumsComponent albums={albums}/>
        </Route>
        <Route exact path='/my/songs'>
          <MySongsComponent songs={songs}/>
        </Route>
        <Route exact path='/songs/:songId'>
          <SongDetailsComponent songs={songs} />
        </Route>
        <Route exact path='/songs'>
          <SongsComponent />
        </Route>
        <Route exact path="/">
          {sessionUser && <HomePageComponent />}
        </Route>
        <Route>
          Page not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
