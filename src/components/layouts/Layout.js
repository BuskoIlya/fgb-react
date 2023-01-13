import { Outlet } from 'react-router-dom';
import FGBMenu from '../menu/FGBMenu';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';

function Layout() {
  return (
    <>
      <Header />
      <FGBMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;