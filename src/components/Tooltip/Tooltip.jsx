import React from 'react';
import css from './Tooltip.module.css';

export const Tooltip = ({ type, message }) => {
  const className = [css.tooltip, css[`tooltip_${type}`]].join(' ');
  return (
    <div className={className}>
      {message}
    </div>
  );
};