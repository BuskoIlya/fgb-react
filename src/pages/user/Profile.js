import React from 'react';
import UserContext from '../../user/UserContext';

import './Profile.css';

function Profile() {

  const [user, setUser] = React.useContext(UserContext);

  return (
    <div>
      Это профиль
    </div>
  );
}

export default Profile;