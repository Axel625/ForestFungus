import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Products from "../Components/Products"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



export default function Navbar() {
  return (
    <Box  >
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button variant="outlined" color="inherit" Link href={Products}>
           Productos
           </Button>
          </Typography>
          <Button variant="outlined" color="inherit">Sign In</Button>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
