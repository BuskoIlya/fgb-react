import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'fgb-ui-components';
import './DropDownLayout.css';

function DropDownLayout({ title, children }) {

  const [isDisplay, setIsDisplay] = React.useState({display: "none"});

  function dropDown() {
    if (isDisplay.display === "none") {
      setIsDisplay({display: "block"});
    } else {
      setIsDisplay({display: "none"});
    }
  }

  return (
    <div className="dropdown-layout">
      <Button
        color="yellow"
        endIcon={<FontAwesomeIcon icon={faChevronDown} />}
        onClick={dropDown}
        className="dropdown-layout__title"
      >
        {title}
      </Button>
      <div className="dropdown-layout__content" style={isDisplay}>{children}</div>
    </div>
  );
}

export default DropDownLayout;