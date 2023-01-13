import './CardLayout.css';

function CardLayout({children}) {
  return (
    <div className="card-layout">
      <div className="card-layout__content">{children}</div>
    </div>
  );
}

export default CardLayout;