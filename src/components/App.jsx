import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomeView } from 'views/HomeView';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegisterView';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
