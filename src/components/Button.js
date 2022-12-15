import './Button.css';

function Button({ classes, onClickAction, startIcon, endIcon, children }) {
  return (
    <button
      className = { classes }
      onClick = { onClickAction }>
      { startIcon }
      { children }
      { endIcon }
    </button>
  );
}

export default Button;