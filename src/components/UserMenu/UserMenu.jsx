import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css'
import Typography from '@mui/material/Typography';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
      <Box sx={{ display: 'flex' }}>
        <NavLink to="/" className={css.NavLinkMenu}><MapsHomeWorkTwoToneIcon sx={{marginRight: '20px', fontSize: '30px'}}/></NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={css.NavLinkMenu}><ContactPhoneTwoToneIcon  sx={{ fontSize: '30px' }}/></NavLink>}
      </Box>
      {isLoggedIn ? (
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px'}}>
          {user && <Typography sx={{marginRight: '20px', fontSize: '20px'}}>{user.name}</Typography>}
          <LoginTwoToneIcon type="button" title="Log Out" onClick={() => dispatch(logOut())} sx={{ cursor: 'pointer', fontSize: '30px' }}/>
        </Box>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <NavLink to="/login" className={css.NavLinkMenu}><LoginTwoToneIcon sx={{marginRight: '20px', fontSize: '30px' }}/></NavLink>
          <NavLink to="/register" className={css.NavLinkMenu}><HowToRegTwoToneIcon sx={{ fontSize: '30px' }}/></NavLink>
        </Box>
      )}
    </Box>
  );
};

export default UserMenu;
