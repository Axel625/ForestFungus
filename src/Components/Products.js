import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product';
import products from '../Product-data';
import imagen1 from '../Assets/fondo.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Footer = styled(Card)({
  marginTop: '20px', 
});



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
        <Grid container spacing={6} columns={10}>
          {products.map((product) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Item>
                <Product products={product} />
              </Item>
            </Grid>
          ))}
        </Grid>
        <Footer variant="outlined">
          <CardContent>
            <Typography variant="body2" color="text.secondary" align="center">
              Contacto: ejemplo@correo.com
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
             Nombre de la empresa
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
             Lugar
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
             Telefono
            </Typography>
          </CardContent>
        </Footer>
      </Box>
  
  );
}
