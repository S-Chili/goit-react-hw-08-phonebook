import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogoutThunk } from 'redux/thunks';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

export const IsLoggedNavigation = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogoutThunk());
  };

  return (
    <div>
      <NavLink
        to="/contacts"       
      >
        Contacts
      </NavLink>
      <span >Welcome, {userName}</span>
      <button type="button" onClick={clickHandler}>
        <LogoutTwoToneIcon /> Logout
      </button>
    </div>
  );
};