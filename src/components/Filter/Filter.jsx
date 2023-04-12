import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contactSlice';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setContactsFilter(event.target.value.toLowerCase()));
  };

  return (
    <TextField
id="input-with-icon-textfield"
label="Find contacts by name"
variant="standard"
onChange={handleFilter}
InputProps={{
  startAdornment: (
    <AccountCircle />
  ),
}}
size="large"
/>
  );
};

export default Filter;

