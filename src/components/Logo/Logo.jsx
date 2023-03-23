import React from 'react';
import css from './Logo.module.css';

export const Logo = ({ className, img, title }) => {
  return (
    <img alt={title} className={`${css.wrapper} ${className}`} src={img} />
  );
};