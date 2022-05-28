import { visibleContacts } from 'redux/contacts/contactsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
export const ContactsList = () => {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button
            onClick={() => {
              dispatch(removeContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
