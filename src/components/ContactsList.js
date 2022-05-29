import React from 'react';
import ContactListItem from './ContactListItem';
import { useEffect } from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  allContacts,
  removeContact,
} from '../redux/contacts/contactsOperations';
import { getFilter, getContacts } from '../redux/contacts/contactsSelector';
const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);
  const handleDelContact = contactId => {
    dispatch(removeContact(contactId));
  };
  return (
    <ul className={css.contact__list}>
      {Object.values(contacts)
        .filter(contact => {
          if (contact.name)
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(({ id, name, number }) => (
          <li className={css.contact__item} key={id}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onDelContact={() => handleDelContact(id)}
            />
          </li>
        ))}
    </ul>
  );
};
export default ContactsList;
ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
