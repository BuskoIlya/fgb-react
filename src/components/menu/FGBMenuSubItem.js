import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FGBLink from '../FGBLink/FGBLink';
import './FGBMenuSubItem.css';

function FGBMenuSubItem({name, children, ...rest}) {
  return (
    <>
      {
        children ? (
          <li className="fgb-menu-sub-item">
            <FGBLink
                type="menu-sub-item"
                iconAfter={<FontAwesomeIcon icon={faChevronRight} />}
                {...rest}
            >
              {name}
            </FGBLink>
            <ul className="fgb-menu-sub-item__list">
              {children}
            </ul>
          </li>
        ) :
        (
          <li>
            <FGBLink type="menu-sub-item" {...rest}>{name}</FGBLink>
          </li>
        )
      }
    </>
  );
}

export default FGBMenuSubItem;