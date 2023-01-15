import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './FGBLink.css';

const types = ['menu-item', 'menu-sub-item', 'text-out', 'text-inner', 'title'];
const menuItemClasses = 'fgb-menu-link fgb-menu-link_item';
const menuItemCSS =
    ({isActive}) => isActive ? `${menuItemClasses} fgb-menu-link_item_active` : menuItemClasses;
const menuSubItemCSS = "fgb-menu-link fgb-menu-link_sub-item";
const linkTypes = {
  'menu-item': {css: menuItemCSS, tag: NavLink},
  'menu-sub-item': {css: menuSubItemCSS, tag: NavLink},
  'text-out': {css: 'fgb-text-link', tag: 'a'},
  'text-inner': {css: 'fgb-text-link', tag: 'a'},
  'title': {css: 'fgb-title-link', tag: Link}
}

const FGBLink = ({type, extraClasses, iconBefore, children, iconAfter, ...rest}) => {

  let linkCSS = linkTypes[type].css;
  if (extraClasses) {
    linkCSS += ' ' + extraClasses;
  }
  const Tag = linkTypes[type].tag;
  if (type === 'text-out') {
    rest = {target: '_blank', ...rest};
  }

  return (
    <Tag className={linkCSS} {...rest}>
      {iconBefore}
      {children}
      {iconAfter}
    </Tag>
  );
}

FGBLink.propTypes = {
  href: PropTypes.string,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.oneOf(types)
}

FGBLink.defaultProps = {type: 'text-out'}

export default FGBLink;