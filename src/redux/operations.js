import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const getContacts = async () => {
    const { data } = await axios.get('contacts');
    return data;
  };
  
  export const addContact = async contact => {
    const { data } = await axios.post('contacts', { contact });
    return data;
  };
  
  export const deleteContact = async contactId => {
    const data = await axios.delete(`contacts/${contactId}`);
  return data;
  };

  export const userSignup = async () => {
    const result = await axios.post('users/signup', {
      name: 'Nasty',
      email: 'nasty@gmail.com',
      password: 'nasty123',
    });
    return result;
  };

  export const userLogin = async user => {
    const request = await axios.post('users/login', user);
  return request;
};
  
export const userLogout = async user => {
  const request = await axios.post('users/logout', user);
return request;
};
