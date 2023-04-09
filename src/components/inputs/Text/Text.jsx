import React from 'react';
import { Tooltip } from '../../Tooltip';
import css from './Text.module.css';

/**
 * status - принимает одно из трёх значений: 'default', 'error', 'valid'.
 */
export const Text = ({ label, status, errorMessage, ...rest }) => {
  const className = [css.input, ...([css[`input_${status}`]])].join(' ');
  return (
    <div className={css.wrapper}>
      <label className={css.content}>
        {label}:
        <input className={className} type="text" {...rest} />
      </label>
      {status === 'error' && <Tooltip type="error" message={errorMessage} />}
    </div>
  );
};