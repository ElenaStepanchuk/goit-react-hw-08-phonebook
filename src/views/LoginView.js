import { LogInForm } from '../components/LogInForm';
import css from './View.module.css';
const LoginView = () => {
  return (
    <>
      <h2 className={css.tittle_view}>Log In</h2>
      <LogInForm />
    </>
  );
};
export default LoginView;
