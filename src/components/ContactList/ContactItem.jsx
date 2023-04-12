import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <ContactPageSharpIcon />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={number}
      />
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;