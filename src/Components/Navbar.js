import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import logo from '../Assets/Forest-preview.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useStateValue } from '../StateProvider';

const Navbar = () => {
  const [{ basket }] = useStateValue();
  
  const [anchorEl, setAnchorEl] = useState(null);

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setUserIsLoggedIn(true);
    setAnchorEl(null);
  };

  const handleSignOut = () => {
  
    setUserIsLoggedIn(false);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Link to="/">
            <img src={logo} alt="Logo" style={{width: '100px'}} /> 
          </Link>
        
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}  
          >

            {userIsLoggedIn ? (
              <MenuItem onClick={handleSignOut} key="logout">
                <ExitToAppIcon /> Cerrar sesión
              </MenuItem>
            ) : (
              <Link to="Inicio_de_Sesion" key="login">
                <MenuItem onClick={handleSignIn}>
                  <AccountCircleIcon /> Iniciar sesión
                </MenuItem>
              </Link>
            )}

          </Menu>

          <Link to="/Checkout-page">
            <IconButton>
              <Badge badgeContent={basket?.length}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        
          <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
            <AccountCircleIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;