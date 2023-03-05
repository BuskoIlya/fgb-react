import classNames from 'classnames';
import PropTypes from 'prop-types';
import './FGBButton.css';

const colors = ['blue', 'green', 'red', 'yellow'];

function FGBButton(
  {active, children, color, endIcon, onClickAction, secondClasses, startIcon, ...rest}) {

  const btnClasses = classNames(
    'fgb-button',
    {[`fgb-button_${color}`]: color},
    {[`fgb-button_active-${color}`]: active && color},
    secondClasses
  );

  return (
    <button
      className={btnClasses}
      onClick={onClickAction}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}

FGBButton.propTypes = {
  color: PropTypes.oneOf(colors),
  endIcon: PropTypes.node,
  startIcon: PropTypes.node
}

export default FGBButton;