import { NavLink } from 'react-router-dom';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';

export const Navigation = () => {
  return (
    <ul >
      <li >
        <NavLink
          to="/register"
        >
          <HowToRegTwoToneIcon size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit" />
          Register
        </NavLink>
      </li>
      <li >
        <NavLink
          to="/login"
        >
          <LoginTwoToneIcon size="large" aria-label="search" color="inherit" />
          Login
        </NavLink>
      </li>
    </ul>
  );
};

