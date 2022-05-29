import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';
import { addContact } from '../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contactsSelector';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  let nameInputId = nanoid();
  let numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const contactCheck = Object.values(contacts).find(contact => {
      if (contact.name)
        return contact.name.toLowerCase().includes(normalizedName);
    });
    if (contactCheck) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label} htmlFor={nameInputId}>
        Name &nbsp;&nbsp;
        <input
          className={css.form__input_name}
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
      <label className={css.form__label} htmlFor={numberInputId}>
        Number &nbsp;&nbsp;
        <input
          className={css.form__input}
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default Form;
Form.protoTypes = { onSubmit: PropTypes.func.isRequired };
