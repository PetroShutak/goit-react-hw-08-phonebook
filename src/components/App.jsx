import { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import RegisterPage from './Register/Register';
import ContactsPage from '../pages/ContactsPage';
import NotFound from './NotFound/NotFound';
import LoginPage from '../pages/Login';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

/*
 /register - публічний маршрут реєстрації нового користувача з формою
 /login - публічний маршрут логіна існуючого користувача з формою
 /contacts - приватний маршрут для роботи зі списком контактів користувача
*/
