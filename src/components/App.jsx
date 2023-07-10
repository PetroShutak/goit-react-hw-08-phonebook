import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
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
