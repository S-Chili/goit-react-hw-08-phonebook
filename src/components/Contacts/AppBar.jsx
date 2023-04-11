import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { IsLoggedNavigation } from './isLoggedNavigation';
import { useSelector } from 'react-redux';
import Home from 'pages/Home';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <NavLink
              to="/"
            >
            <Home
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            />
          </NavLink>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            PhoneBook
          </Typography>
          <nav>
            {isLoggedIn ? <IsLoggedNavigation /> : <Navigation />}
          </nav>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}