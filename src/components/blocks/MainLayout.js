import './MainLayout.css';

function MainLayout({ title, children }) {
  return (
      <div className = "main-layout">
        <h2 className = "main-layout__title">{ title }</h2>
        { children }
      </div>
  );
}

export default MainLayout;