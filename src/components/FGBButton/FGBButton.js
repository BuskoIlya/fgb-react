import './FGBButton.css';

function FGBButton({classes, onClickAction, startIcon, endIcon, children}) {
  return (
    <button
      className={classes}
      onClick={onClickAction}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}

export default FGBButton;