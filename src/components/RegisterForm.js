import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Register&&LogInForm.module.css';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let nameInputId = nanoid();
  let emailInputId = nanoid();
  let passwordInputId = nanoid();
  const dispatch = useDispatch();
  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));

    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <label className={css.registerForm__label} htmlFor={nameInputId}>
        Name &nbsp;&nbsp;
        <input
          className={css.registerForm__input_name}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </label>
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
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          title="Password must be uppercase and lowercase latin letters, numbers, special characters. Minimum 8 characters."
          required
          id={passwordInputId}
        />
      </label>
      <button className={css.registerForm__btn} type="submit">
        Create user
      </button>
    </form>
  );
};
