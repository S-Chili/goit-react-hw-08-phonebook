import  ContactForm  from '../components/Contacts/ContactForm';
import  ContactsList  from '../components/Contacts/Contacts';
import { getContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default Contacts;