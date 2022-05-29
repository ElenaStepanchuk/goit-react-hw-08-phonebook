import Form from './Form';
import React from 'react';
import ContactsList from './ContactsList';
import Filter from './Filter';
import css from './AddContacts.module.css';
const AddContacts = () => {
  return (
    <div className={css.add_contacts}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
export default AddContacts;
