import './App.css';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactsView } from '../views/ContactsView';
import { HomeView } from '../views/HomeView';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';

// const Layout = lazy(() => import('../components/Layout'));
// const HomeView = lazy(() => import('../views/HomeView'));
// const RegisterView = lazy(() => import('../views/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView'));
// const ContactsView = lazy(() => import('../views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
