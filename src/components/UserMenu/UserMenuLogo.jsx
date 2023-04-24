import React from 'react';
import { CharLogo, Logo } from 'fgb-ui-components';
import css from './UserMenuLogo.module.css';

export const UserMenuLogo = ({ img, letter, onClick }) => {
  return (
    <div className={css.content} onClick={onClick}>
      {
        img ? <Logo src={process.env.REACT_APP_IMG_USERS + img} />
          : <CharLogo className={css.letter} char={letter || '?'} />
      }
    </div>
  );
};