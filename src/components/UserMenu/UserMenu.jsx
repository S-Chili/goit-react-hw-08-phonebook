import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Box sx={{ display: 'flex' }}>
    <NavLink to="/" className={css.NavLinkMenu}>Home</NavLink>
    {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
  </Box>
  {isLoggedIn ? (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <p>{user.email}</p>
      <LoginTwoToneIcon type="button" title="Log Out" onClick={() => dispatch(logOut())}/>
    </Box>
  ) : (
    <Box sx={{ display: 'flex' }}>
      <NavLink to="/login" className={css.NavLinkMenu}><LoginTwoToneIcon/>Login</NavLink>
      <NavLink to="/register" className={css.NavLinkMenu}><HowToRegTwoToneIcon/>Register</NavLink>
    </Box>
  )}
</Box>
  );
};

export default UserMenu;
