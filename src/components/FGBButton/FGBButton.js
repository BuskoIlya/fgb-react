import './FGBButton.css';

function FGBButton({classes, onClickAction, startIcon, endIcon, children, ...rest}) {
  return (
    <button
      className={classes}
      onClick={onClickAction}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}

export default FGBButton;