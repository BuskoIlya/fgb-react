import React from 'react';
import { Logo } from '../Logo';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.content}>
      <p>&copy; Бусько Илья Владимирович</p>
      <Logo
        className={css.logo}
        img={process.env.REACT_APP_IMG_LOGOS_PATH + 'fgb-160.png'}
        title="Логотип сообщества 'Умный Аист'"
      />
    </footer>
  );
};