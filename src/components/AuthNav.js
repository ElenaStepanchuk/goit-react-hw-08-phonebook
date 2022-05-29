import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div className={css.auth_nav__conteiner}>
      <NavLink className={css.auth_nav__link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.auth_nav__link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
