import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import logo from '../Assets/Forest-preview.png';
import { useStateValue } from '../StateProvider';
import Fab from '@mui/material/Fab';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
  color: 'white',
};


const fabStyle = {
  backgroundColor: 'blue',
  color: 'white',
  width: '40px',
  height: '40px',
  marginLeft: '10px', // Agrega margen izquierdo al ícono del chatbot
};

const navbarStyle = {
  backgroundColor: '#ff7514',
};

const logoStyle = {
  width: '100px',
  marginRight: '10px',
};

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: 1, // Para que los botones del menú ocupen el espacio restante
};



const Navbar = () => {
  const [{ basket }] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={navbarStyle}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Link>
          <Box sx={menuStyle}>
            <Link to="/Productos" style={linkStyle}>
              <Button color="inherit" variant="outlined">Products</Button>
            </Link>
            <Link to="/IA" style={linkStyle}>
              <Fab color="primary" aria-label="add" sx={fabStyle}>
                <CatchingPokemonIcon />
              </Fab>
            </Link>
          </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/Inicio_de_Sesion">
                <MenuItem onClick={handleClose}>Sign In
                </MenuItem>
              </Link>

            </Menu>
            <Link to="/Checkout-page" style={linkStyle}>
              <IconButton aria-label="cart" color="inherit" variant="outlined">
                <StyledBadge badgeContent={basket?.length} color="error">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <IconButton color="inherit" variant="outlined" onClick={handleMenuClick}>
              <AccountCircleIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
