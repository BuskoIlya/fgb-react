import { Outlet } from 'react-router-dom';
import FGBMenu from '../menu/FGBMenu';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = () => {
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