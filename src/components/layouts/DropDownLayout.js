import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FGBButton from '../FGBButton/FGBButton';
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
      <FGBButton
        classes="fgb-button fgb-button_yellow dropdown-layout__title"
        onClickAction={dropDown}
        endIcon={<FontAwesomeIcon icon={faChevronDown} />}
      >
        {title}
      </FGBButton>
      <div className="dropdown-layout__content" style={isDisplay}>{children}</div>
    </div>
  );
}

export default DropDownLayout;