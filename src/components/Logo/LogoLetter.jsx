import React from 'react';
import css from './Logo.module.css';

export const LogoLetter = ({ className, letter }) => {
  return (
    <span className={`${css.wrapper} ${className}`}>{letter}</span>
  );
};