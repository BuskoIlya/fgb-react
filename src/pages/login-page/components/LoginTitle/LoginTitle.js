import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'fgb-ui-components';

import css from './LoginTitle.module.css';

export const LoginTitle = ({ className, toggle, switchToggle }) => {
  return (
    <div className={`${css.title} ${className}`}>
      <Button
        color="blue"
        isActive={toggle}
        iconBefore={<FontAwesomeIcon icon={faRightToBracket}/>}
        onClick={switchToggle}
      >
        Войти
      </Button>
      <Button
        color="blue"
        isActive={!toggle}
        iconBefore={<FontAwesomeIcon icon={faUser}/>}
        onClick={switchToggle}
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};