import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { LinkMenu } from 'fgb-ui-components';
import './FGBMenuSubItem.css';

function FGBMenuSubItem({name, children, ...rest}) {
  return (
    <>
      {
        children ? (
          <li className="fgb-menu-sub-item">
            <LinkMenu
              iconAfter={<FontAwesomeIcon icon={faChevronRight} />}
              Tag={NavLink}
              {...rest}
            >
              {name}
            </LinkMenu>
            <ul className="fgb-menu-sub-item__list">
              {children}
            </ul>
          </li>
        ) :
        (
          <li>
            <LinkMenu Tag={NavLink} {...rest}>{name}</LinkMenu>
          </li>
        )
      }
    </>
  );
}

export default FGBMenuSubItem;