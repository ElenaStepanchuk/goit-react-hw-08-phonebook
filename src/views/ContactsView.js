import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { getIsLoading } from 'redux/contacts/contactsSelector';
import { Spiner } from 'components/Spiner';
import { ContactsList } from 'components/ContactsList';
import { useSelector } from 'react-redux';
export const ContactsView = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <h2>Phonebook</h2>;
      <Form />
      <Filter />
      <h2>Contacts</h2>
      {isLoading && <Spiner />}
      <ContactsList />
    </>
  );
};
