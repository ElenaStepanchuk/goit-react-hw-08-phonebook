import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filtered } from '../contacts/contactsAction';
import { allContacts, addContact, removeContact } from './contactsOperations';
export const filterReducer = createReducer(``, {
  [filtered]: (_, action) => action.payload,
});
const entities = createReducer([], {
  [allContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [
    ...Object.values(state),
    action.payload,
  ],
  [removeContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const isLoading = createReducer(false, {
  [allContacts.pending]: () => true,
  [allContacts.fulfilled]: () => false,
  [allContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});
const error = createReducer(null, {
  [allContacts.rejected]: (_, action) => action.payload,
  [allContacts.pending]: () => null,
});
export default combineReducers({
  entities,
  isLoading,
  error,
});
