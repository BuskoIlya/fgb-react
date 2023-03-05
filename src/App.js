import React from 'react';
import { CookiesProvider } from 'react-cookie';
import FGBRoutes from './FGBRoutes';
import UserContext from './user/UserContext';
import './css/logo.css';
import './css/title.css';

function App() {

  const [user, setUser] = React.useState({token: window.localStorage.getItem('token')});

  return (
    <CookiesProvider>
      <UserContext.Provider value={[user, setUser]}>
        <FGBRoutes/>
      </UserContext.Provider>
    </CookiesProvider>
  );
}

export default App;