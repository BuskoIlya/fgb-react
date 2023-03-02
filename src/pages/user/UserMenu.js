import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../user/UserContext';

import FGBButton from '../../components/FGBButton/FGBButton';
import FGBMenuItem from '../../components/menu/FGBMenuItem';
import './UserMenu.css';

function UserMenu({secondClasses}) {

  const [user, setUser] = React.useContext(UserContext);
  const [userMenuDisplay, setUserMenuDisplay] = React.useState({display: "none"});
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('login');
  }

  const onLogout = () => {
    if (window.confirm('Вы действиетельно хотите выйти?')) {
      setUser({});
      window.localStorage.removeItem('token');
    }
  }

  const onClickMobile = () => {
    if (userMenuDisplay.display === "none") {
      setUserMenuDisplay({display: "flex"});
    } else {
      setUserMenuDisplay({display: "none"});
    }
  }

  return (
    <div className={`user-menu ${secondClasses}`}>
      {
        user.token
          ?
          <nav className="user-menu__nav">
            <div className="logo user-menu__logo" onClick={onClickMobile}>
              {
                user.logoImg ?
                  <img
                    src={process.env.REACT_APP_IMG_USERS + user.logoImg}
                    alt={user.fio}
                  />
                  : <span className="user-menu__logo-text">{user.letter || '?'}</span>
              }
            </div>
            <ul className="user-menu__ul" style={userMenuDisplay}>
              <FGBMenuItem to="profile" name="Профиль" onClick={onClickMobile} />
              <FGBMenuItem to="/" name="Выйти" onClick={onLogout} />
            </ul>
          </nav>
          :
          <FGBButton
            color="blue"
            onClickAction={onLogin}
            startIcon={<FontAwesomeIcon icon={faRightToBracket}/>}
          >
            Войти
          </FGBButton>
      }
    </div>
  );
}

export default UserMenu;