// Products.js

import React from 'react';
import { useStateValue } from './stateProvider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Product from './Product';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Importa o define la variable products
import products from '../Product-data'; // Ajusta la ruta según sea necesario

const Footer = styled(Card)({
  marginTop: '20px',
  marginBottom: '20px',
  backgroundColor: 'black',
  color: 'white',
  padding: '15px', 
  boxSizing: 'border-box',  
  textAlign: 'center',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const ProductContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const Products = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6} columns={10}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={product.id} item>
            <Item>
              <ProductContainer container>
                <Product products={product} />
                
              </ProductContainer>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Footer variant="outlined">
        <CardContent>
          <Typography variant="body2" color="white" align="center">
          Contacto: Honlleta8@gmail.com
          </Typography>
          <Typography variant="body2" color="white" align="center">
            Nombre de la empresa: Forest Fungus
          </Typography>
          <Typography variant="body2" color="white" align="center">
            Lugar: Capulhuac
          </Typography>
          <Typography variant="body2" color="white" align="center">
            Telefono:725 659 4235
          </Typography>
        </CardContent>
      </Footer>
    </Box>
  );
};

export default Products;
