import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import FGBMenuItem from '../menu/FGBMenuItem';
import UserContext from '../../user/UserContext';

import { Button } from 'fgb-ui-components';
import { UserMenuLogo } from './UserMenuLogo';
import { useShow } from '../../hooks';
import css from './UserMenu.module.css';

const urlLogout = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER_LOGOUT;

export const UserMenu = ({ className }) => {
  const [user, setUser] = React.useContext(UserContext);
  const [isShow, handleShow] = useShow(false);
  const navigate = useNavigate();

  const onLogin = () => { navigate('login') };

  const onLogout = async () => {
    if (window.confirm('Вы действиетельно хотите выйти?')) {
      await fetch(urlLogout, { credentials: 'include' })
        .then(response => {
          setUser({});
          window.localStorage.removeItem('token');
        })
        .catch(e =>  console.log(e));
    }
  };

  return (
    <div className={`${css.wrapper} ${className}`}>
      {
        user.token ?
          <nav>
            <UserMenuLogo img={user.img} letter={user.letter} onClick={handleShow} />
            { isShow &&
              <ul className={css.ul}>
                <FGBMenuItem to="profile" name="Профиль" />
                <FGBMenuItem to="/" name="Выйти" onClick={onLogout} />
              </ul>
            }
          </nav>
          :
          <Button
            color="blue"
            iconBefore={<FontAwesomeIcon icon={faRightToBracket} />}
            onClick={onLogin}
          >
            Войти
          </Button>
      }
    </div>
  );
};