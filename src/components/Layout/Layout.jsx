import Header from 'components/Header/Header';
import Footer from '../Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = ({ children, hideFooter }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      {!hideFooter && <Footer />}
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
