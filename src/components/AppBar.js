import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
      <Outlet />
    </header>
  );
};
