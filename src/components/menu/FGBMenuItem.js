import React from 'react';
import FGBLink from '../FGBLink/FGBLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FGBMenuItem.css';

function FGBMenuItem({ name, children, ...rest }) {
  return (
    <>
      {
        children ? (
          <li className = "fgb-menu-item">
            <FGBLink
                type="menu-item"
                iconAfter={<FontAwesomeIcon icon={faChevronDown} />}
                {...rest}
            >
              {name}
            </FGBLink>
            <ul className = "fgb-menu-item__list">
              {children}
            </ul>
          </li>
        ) :
        (
          <li>
            <FGBLink type="menu-item" {...rest}>{name}</FGBLink>
          </li>
        )
      }
    </>
  );
}

export default FGBMenuItem;