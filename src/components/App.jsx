import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import ProminentAppBar from './Contacts/AppBar';
//import { Navigation } from './Contacts/Navigation';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
};

export default function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<ProminentAppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  </div>
);
}
   