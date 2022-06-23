import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { restoreUser } from './store/session';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(restoreUser())
  }, [dispatch])

  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
