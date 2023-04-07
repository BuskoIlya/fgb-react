import React, { useEffect } from 'react';
import FGBRoutes from './FGBRoutes';
import { UserContext, UserStore } from './store';
import './css/logo.css';
import './css/title.css';

const userStore = new UserStore();

export const App = () => {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth();
    }
  }, []);

  return (
    <UserContext.Provider value={{userStore}}>
      <FGBRoutes/>
    </UserContext.Provider>
  );
};