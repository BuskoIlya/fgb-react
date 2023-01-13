import './TitleLayout.css';

function TitleLayout({ title, children }) {
  return (
    <div className="title-layout">
      <h2 className="title-layout__title">{title}</h2>
      {children}
    </div>
  );
}

export default TitleLayout;