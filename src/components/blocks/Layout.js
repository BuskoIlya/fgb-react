import { Outlet } from 'react-router-dom';
import FGBMenu from '../menu/FGBMenu';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header/>
      <FGBMenu/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Layout;