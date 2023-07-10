import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>

      <NavLink to="/register">Register</NavLink>

      <NavLink to="/login">Login</NavLink>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </nav>
  );
};

export default Navigation;
