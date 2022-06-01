import css from './View.module.css';
export const HomeView = () => {
  return (
    <>
      <h1 className={css.tittle_view__homepage}>Hello!</h1>;
      <p className={css.description_homepage}>
        In this phonebook you can create, save, add and edit your own contacts.
        Hope you enjoy this app.
      </p>
      ;
    </>
  );
};
