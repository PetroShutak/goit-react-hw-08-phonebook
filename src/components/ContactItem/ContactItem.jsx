import React, { useState } from 'react';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation/DeleteConfirmation';
import { ContactItemWrapper, ContactName, ContactPhone, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <ContactItemWrapper>
      <ContactName>{contact.name}</ContactName>
      <ContactPhone>
       {contact.number}
      </ContactPhone>
      <DeleteButton onClick={handleDeleteClick}>
        Delete
      </DeleteButton>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </ContactItemWrapper>
  );
};

export default ContactItem;
