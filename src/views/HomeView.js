import { useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/authSelectors';
export const HomeView = () => {
  const name = useSelector(getUserName);
  return <h1>Hello, {name}!</h1>;
};
