import React,{useEffect} from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { getStatusFilter } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return null; // or show loading indicator
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ol>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ol>
      {isLoading && <p>update list...</p>}
    </ContactListContainer>
  );
};

export default ContactList;