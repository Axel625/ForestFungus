import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';
//import { Badge } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Productos</Button>
          </Typography>
          <Button variant="outlined" color="inherit">Sign In</Button>

          <IconButton aria-label="show cart items" color="inherit">
              <ShoppingCart fontSize="large" /> 
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
