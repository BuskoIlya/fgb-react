import React from 'react';
import { Logo } from '../Logo';
import { LogoLetter } from '../Logo/LogoLetter';
import css from './UserMenuLogo.module.css';

export const UserMenuLogo = ({ img, letter, onClick }) => {
  return (
    <div className={css.content} onClick={onClick}>
      {
        img ? <Logo src={process.env.REACT_APP_IMG_USERS + img} />
          : <LogoLetter className={css.letter} letter={letter || '?'} />
      }
    </div>
  );
};