import classNames from 'classnames';
import PropTypes from 'prop-types';
import './FGBButton.css';

const colors = ['blue', 'green', 'red', 'yellow'];

function FGBButton({
  active, disabled, children, color, endIcon, onClick, secondClasses, startIcon, ...rest
}) {

  const btnClasses = classNames(
    'fgb-button',
    {[`fgb-button_${color}`]: !disabled && color},
    {[`fgb-button_active-${color}`]: !disabled && active && color},
    secondClasses
  );

  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  }

  return (
    <button
      className={btnClasses}
      disabled={disabled}
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
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(colors),
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  startIcon: PropTypes.node
}

FGBButton.defaultProps = {
  disabled: false,
  onClick: () => {},
}

export default FGBButton;