import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';

import FGBMenuItem from '../menu/FGBMenuItem';
import { UserContext } from '../../store';
import { Button } from 'fgb-ui-components';
import { UserMenuLogo } from './UserMenuLogo';
import { useShow } from '../../hooks';
import css from './UserMenu.module.css';

export const UserMenu = observer(({ className }) => {

  const { userStore } = useContext(UserContext);
  const [isShow, handleShow] = useShow(false);
  const navigate = useNavigate();

  const onLogin = () => { navigate('login') };
  const onLogout = async () => {
    if (window.confirm('Вы действиетельно хотите выйти?')) {
      await userStore.logout();
    }
  };

  return (
    <div className={`${css.wrapper} ${className}`}>
      {
        userStore.isAuth ? (
          <nav>
            <UserMenuLogo img={userStore.img} letter={userStore.initials} onClick={handleShow} />
            { isShow &&
              <ul className={css.ul}>
                <FGBMenuItem to="profile" name="Профиль" />
                <FGBMenuItem to="/" name="Выйти" onClick={onLogout} />
              </ul>
            }
          </nav>) : (
          <Button
            color="blue"
            iconBefore={<FontAwesomeIcon icon={faRightToBracket} />}
            onClick={onLogin}
          >
            Войти
          </Button>)
      }
    </div>
  );
});