import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import FGBButton from '../../components/FGBButton/FGBButton';
import UserContext from '../../user/UserContext';
import './UserMenu.css';

function UserMenu({secondClasses}) {

  const [user, setUser] = React.useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('login');
  }

  const onLogout = () => {
    if (window.confirm('Вы действиетельно хотите выйти?')) {
      setUser({token: ''});
      window.localStorage.removeItem('token');
    }
  }

  return (
    <div className={`user-menu ${secondClasses}`}>
      {
        user.token ?
          <FGBButton
            classes="fgb-button fgb-button_blue"
            onClickAction={onLogout}
            endIcon={<FontAwesomeIcon icon={faRightFromBracket}/>}
          >
            Выйти
          </FGBButton>
          :
          <FGBButton
            classes="fgb-button fgb-button_blue"
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