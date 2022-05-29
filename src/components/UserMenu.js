import css from './UserMenu.module.css';
export const UserMenu = () => {
  return (
    <div className={css.user_menu__container}>
      <span className={css.user_menu__span}>Welcome to your phonebook!</span>
      <button className={css.btn_exit} type="button">
        Logout
      </button>
    </div>
  );
};
