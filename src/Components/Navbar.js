import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import logo from "../Assets/Forest.png";
import { useStateValue } from '../StateProvider'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const linkStyle = {
  textDecoration: 'none',
  color: 'white', // Cambiar el color de los enlaces a blanco
};
const navbarButtonStyle = {
  marginLeft: '10px', // Añadir margen izquierdo al botón
};

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/Productos" style={linkStyle}>
              <Button color="inherit" variant='outlined'>Productos</Button>
            </Link>
          </Typography>
          <Link style={linkStyle} >
            <Button color="inherit" variant='outlined' style={navbarButtonStyle}>Sign In</Button>
          </Link>
          <Link to="/Checkout-page" style={linkStyle}>
            <IconButton aria-label="cart" color="inherit" variant='outlined' >
              <StyledBadge badgeContent={basket?.length} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
