import { useState } from 'react';
import { getFilter } from 'redux/contacts/contactsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <form>
      <label>
        Filter
        <input
          name="filter"
          onChange={event => dispatch(changeFilter(event.target.value))}
          value={filter}
        ></input>
      </label>
    </form>
  );
};
