import { NavLink } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <div className={css.nav_conteiner}>
      <NavLink className={css.navigate} to="/">
        Home
      </NavLink>
      <NavLink className={css.navigate} to="/contacts">
        Contacts
      </NavLink>
      {/* <Outlet /> */}
    </div>
  );
};
