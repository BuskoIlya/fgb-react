import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FGBLink.css';

const types = ['menu-item', 'menu-sub-item', 'text'];

const menuItemClasses = 'fgb-menu-link fgb-menu-link_item';
const menuItemCSS =
    ({ isActive }) => isActive ? `${menuItemClasses} fgb-menu-link_item_active` : menuItemClasses;
const menuSubItemCSS = "fgb-menu-link fgb-menu-link_sub-item";
const textCSS = 'fgb-text-link';

const cssByType = {
  'menu-item': menuItemCSS,
  'menu-sub-item': menuSubItemCSS,
  'text': textCSS
}

const FGBLink = ({ type, children, ...rest }) => {
  let linkCSS = cssByType[type];
  const Tag = type === 'text' ? 'a': NavLink;
  if (type === 'text') {
    rest = {target: '_blank', ...rest};
  }
  return <Tag className={linkCSS} {...rest}>{children}</Tag>;
}

FGBLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(types)
}

FGBLink.defaultProps = {type: 'text'}

export default FGBLink;