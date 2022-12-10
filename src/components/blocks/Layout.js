import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function Layout() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  );
}

export default Layout;