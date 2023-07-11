import React, { useEffect } from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return null; // or show loading indicator
  }

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
          </li>
        ))}
      </ul>

      {isLoading && <p>Loading...</p>}
    </ContactListContainer>
  );
};

export default ContactList;
