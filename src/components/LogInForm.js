import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Register&&LogInForm.module.css';
import { logIn } from '../redux/auth/authOperations';
// import PropTypes from 'prop-types';
// import { addContact } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/contactsSelector';
export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let emailInputId = nanoid();
  let passwordInputId = nanoid();
  const dispatch = useDispatch();
  //   const contacts = useSelector(getContacts);
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
          // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          // title="Password must be uppercase and lowercase latin letters, numbers, special characters. Minimum 8 characters."
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
