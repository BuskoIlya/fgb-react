import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import './DropDownPanel.css';

function DropDownPanel({ title, children }) {

  const [dataDisplay, setDataDisplay] = React.useState({ display: "" });

  function dropDown() {
    if (dataDisplay.display === "none") {
      setDataDisplay({ display: "flex" });
    } else {
      setDataDisplay({ display: "none" });
    }
  }

  return (
    <article className = "dropdown-panel">
      <Button classes = "btn dropdown-panel__title"
              onClickAction = { dropDown }
              endIcon = { <FontAwesomeIcon icon = { faChevronDown } /> }
      >
        { title }
      </Button>
      <div className = "dropdown-panel__data" style = { dataDisplay }>{ children }</div>
    </article>
  );
}

export default DropDownPanel;