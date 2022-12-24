import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import FGBMenu from '../menu/FGBMenu';

function Layout() {
  return (
    <>
      <Header/>
      <FGBMenu/>
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  );
}

export default Layout;