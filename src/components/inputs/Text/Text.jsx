import React from 'react';
import { Tooltip } from '../../Tooltip';
import css from './Text.module.css';

/**
 * status - принимает одно из значений: 'default', 'error', 'valid'
 * labelVariant - принимает одно из значений: 'horizontal' (by default), 'vertical'
 */
export const Text = ({
  label, message, status, type = 'text', variant = 'horizontal', ...rest
}) => {

  const inputCSS = [
    css.input,
    ...(status ? [css[`input_${status}`]] : [])
  ].join(' ');

  return (
    <div className={css[`container_${variant}`]}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css.inputContainer}>
        <input className={inputCSS} type={type} {...rest} />
        {
          status === 'error' && message && (
            <div className={css.tooltip}>
              <Tooltip type="error" message={message}/>
            </div>
          )
        }
      </div>
    </div>
  );
};