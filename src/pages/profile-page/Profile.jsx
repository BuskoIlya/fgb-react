import React from 'react';
import { Img, Info } from './components';
import css from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={css.grid}>
      <Img className={css.img} />
      <Info className={css.info} />
    </div>
  );
};