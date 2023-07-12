import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import RegisterPage from './Register/Register';
import ContactsPage from '../pages/ContactsPage';
import NotFound from './NotFound/NotFound';
import LoginPage from '../pages/Login';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuth } from 'redux/auth/useAuth';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  console.log('isRefreshing', isRefreshing);

  return isRefreshing ? (
    <h1>Оновлююсь...</h1>
  ):(
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
