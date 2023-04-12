import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactSlice';
import List from '@mui/material/List';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  
  const filteredContacts = contacts.filter(contact => 
    contact.name && contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </List>
  );
};

export default ContactList;
