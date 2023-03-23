import React from 'react';
import { TitleCountry } from 'fgb-ui-components';
import css from './TDCountry.module.css';

const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

export const TDCountry = ({ img, label, tooltip, value }) => {
  return (
    <td data-label={label} className={css.wrapper}>
      <TitleCountry img={flagPath + img} tooltip={tooltip} value={value} />
    </td>
  );
};