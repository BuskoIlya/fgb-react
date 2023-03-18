import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { LinkMenu } from 'fgb-ui-components';
import './FGBMenuItem.css';

function FGBMenuItem({name, children, ...rest}) {
  return (
    <>
      {
        children ? (
          <li className = "fgb-menu-item">
            <LinkMenu
                iconAfter={<FontAwesomeIcon icon={faChevronDown} />}
                isFirstLevel
                Tag={NavLink}
                {...rest}
            >
              {name}
            </LinkMenu>
            <ul className = "fgb-menu-item__list">
              {children}
            </ul>
          </li>
        ) :
        (
          <li>
            <LinkMenu isFirstLevel Tag={NavLink} {...rest}>{name}</LinkMenu>
          </li>
        )
      }
    </>
  );
}

export default FGBMenuItem;