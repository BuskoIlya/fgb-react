import React from 'react';
import FGBRoutes from './FGBRoutes';
import UserContext from './user/UserContext';
import './css/logo.css';
import './css/title.css';

function App() {

  const [user, setUser] = React.useState({ token: window.localStorage.getItem('token') });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <FGBRoutes/>
    </UserContext.Provider>
  );
}

export default App;