import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FGBLink.css';

const types = ['menu-item', 'menu-sub-item', 'text'];

const menuItemClasses = 'fgb-menu-link fgb-menu-link_item';
const menuItemCSS =
    ({ isActive }) => isActive ? `${menuItemClasses} fgb-menu-link_item_active` : menuItemClasses;
const menuSubItemCSS = "fgb-menu-link fgb-menu-link_sub-item";
const textCSS = '';

const cssByType = {
  'menu-item': menuItemCSS,
  'menu-sub-item': menuSubItemCSS,
  'text': textCSS
}

const FGBLink = ({ type, to, children }) => {
  let linkCSS = cssByType[type];
  return <NavLink className={linkCSS} to={to}>{children}</NavLink>;
}

FGBLink.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types).isRequired
}

export default FGBLink;