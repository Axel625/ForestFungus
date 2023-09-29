import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product';
import products from '../Product-data';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
          products.map(products =>(
            <Grid xs={12} sm={6} md={4} lg={3}>
          <Item><Product key={products.id} products={products}/></Item>
        </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
