import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);
  const handleLogaut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.user_menu__container}>
      <span className={css.user_menu__span}>
        Welcome, {name}, to your phonebook! You are logged in as {email}.
      </span>
      <button
        className={css.btn_exit}
        type="button"
        onClick={() => handleLogaut()}
      >
        Logout
      </button>
    </div>
  );
};
