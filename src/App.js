import React, { useEffect } from 'react';
import { AppRouter } from '@router';
import { UserContext, UserStore } from '@store';
import '@css/title.css';

const userStore = new UserStore();

export const App = () => {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth();
    }
  }, []);

  return (
    <UserContext.Provider value={{userStore}}>
      <AppRouter/>
    </UserContext.Provider>
  );
};