import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  
import { useStateValue } from "../../StateProvider";
import accounting from 'accounting';

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();  

  const totalAmount = basket ? basket.reduce((total, item) => total + item.price, 0) : 0;

  const handlePayment = () => {
    
    alert('Pago exitoso. ¡Gracias por tu orden!');

    dispatch({
      type: 'EMPTY_BASKET',
    });
    navigate('/');
  };

  const payments = [];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket ? (
          basket.map((product) => (
            <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{accounting.formatMoney(product.price, "$")}</Typography>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No items in the basket" />
          </ListItem>
        )}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(totalAmount, "$")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handlePayment} sx={{ mt: 3 }}>
        Realizar Pago
      </Button>
    </React.Fragment>
  );
};

export default Review;
