import './TabLayout.css';

function TabLayout({ tab1Title, tab1, tab2Title, tab2 }) {
  return (
      <div className = "tab-layout">
        <input className = "tab-layout__radio" id = "tab-layout__radio_1"
            type = "radio" name = "radio-alias" readOnly checked/>
        <label className = "tab-layout__label" htmlFor = "tab-layout__radio_1">{ tab1Title }</label>
        <input className = "tab-layout__radio" id = "tab-layout__radio_2"
            type = "radio" name = "radio-alias" readOnly />
        <label className = "tab-layout__label" htmlFor = "tab-layout__radio_2">{ tab2Title }</label>

        <div className = "tab-layout__tab" id = "tab-layout__tab_1">{ tab1 }</div>
        <div className = "tab-layout__tab" id = "tab-layout__tab_2">{ tab2 }</div>
      </div>
  );
}

export default TabLayout;