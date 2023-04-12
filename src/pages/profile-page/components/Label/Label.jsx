import React from 'react';
import css from './Label.module.css';

export const Label = ({ title, value }) => {
  return (
    <>
      {
        title ? (
          <label className={css.container}>
            {title}
            <span>{value}</span>
          </label>
          )
          : <p>{value}</p>
      }
    </>
  );
};