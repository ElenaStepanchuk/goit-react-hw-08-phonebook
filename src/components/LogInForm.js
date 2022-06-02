import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Register&&LogInForm.module.css';
import { logIn } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let emailInputId = nanoid();
  let passwordInputId = nanoid();
  const dispatch = useDispatch();
  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <label className={css.registerForm__label} htmlFor={emailInputId}>
        Email &nbsp;&nbsp;
        <input
          className={css.registerForm__input_email}
          onChange={handleInputChange}
          value={email}
          type="text"
          name="email"
          pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
          title="Input please correct email"
          required
          id={emailInputId}
        />
      </label>
      <label className={css.registerForm__label} htmlFor={passwordInputId}>
        Password &nbsp;&nbsp;
        <input
          className={css.registerForm__input_password}
          onChange={handleInputChange}
          value={password}
          type="text"
          name="password"
          required
          id={passwordInputId}
        />
      </label>
      <button className={css.registerForm__btn} type="submit">
        Enter
      </button>
    </form>
  );
};
