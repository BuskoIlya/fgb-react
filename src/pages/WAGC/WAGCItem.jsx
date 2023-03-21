import React from 'react';
import { TitleCountry } from 'fgb-ui-components';

const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

export const WAGCItem = ({ img, label, tooltip, value }) => {
  return (
    <td data-label={label} className="table__cell">
      <TitleCountry img={flagPath + img} tooltip={tooltip} value={value} />
    </td>
  );
};