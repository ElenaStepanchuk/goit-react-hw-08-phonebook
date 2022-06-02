import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Navigation.module.css';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={css.nav_conteiner}>
      <NavLink className={css.navigate} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navigate} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
