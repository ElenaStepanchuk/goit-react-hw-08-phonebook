import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelectors';
export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Outlet />
    </header>
  );
};
