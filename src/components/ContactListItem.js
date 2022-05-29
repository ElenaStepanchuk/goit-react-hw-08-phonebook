import React from 'react';
import css from './ContactsListItem.module.css';
import PropTypes from 'prop-types';
const ContactListItem = ({ name, number, onDelContact }) => {
  return (
    <>
      {name}: &nbsp; {number}
      <button className={css.del__btn} type="button" onClick={onDelContact}>
        Delete
      </button>
    </>
  );
};
export default ContactListItem;
ContactListItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
