import { RegisterForm } from '../components/RegisterForm';
import css from './View.module.css';
const RegisterView = () => {
  return (
    <>
      <h2 className={css.tittle_view}>Registrations</h2>;
      <RegisterForm />
    </>
  );
};
export default RegisterView;
