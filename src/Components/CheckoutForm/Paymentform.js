import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import accounting from 'accounting';

const PaymentForm = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const totalAmount = basket ? basket.reduce((total, item) => total + item.price, 0) : 0;

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [showPayPalButton, setShowPayPalButton] = useState(false);

  const [creditCard, setCreditCard] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const [paypal, setPaypal] = useState({
    email: '',
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayPalCheckboxChange = () => {
    setShowPayPalButton(!showPayPalButton);
  };

  const handleCreditCardPayment = () => {
    // Lógica de pago con tarjeta de crédito
    alert('Pago con tarjeta de crédito exitoso. ¡Gracias por tu orden!');
    handlePaymentSuccess();
  };

  const handlePaypalPayment = () => {
    // Lógica de pago con PayPal
    alert('Pago con PayPal exitoso. ¡Gracias por tu orden!');
    handlePaymentSuccess();
  };

  const handlePaymentSuccess = () => {
    // Vacía la cesta después de realizar el pago
    dispatch({
      type: 'EMPTY_BASKET',
    });

    // Redirige a la pantalla principal u otra pantalla deseada
    navigate('/');
  };

  const isCreditCardFormFilled = () => {
    const { cardName, cardNumber, expDate, cvv } = creditCard;
    return cardName !== '' && cardNumber !== '' && expDate !== '' && cvv !== '';
  };

  const isPaypalFormFilled = () => {
    return paypal.email !== '';
  };

  const isPaymentFormValid = () => {
    return (paymentMethod === 'creditCard' && isCreditCardFormFilled()) ||
           (paymentMethod === 'paypal' && isPaypalFormFilled());
  };

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
              <Typography variant="body2">{accounting.formatMoney(product.price, '$')}</Typography>
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
            {accounting.formatMoney(totalAmount, '$')}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment Details
          </Typography>
          {/* Selector de método de pago con radio buttons */}
          <FormControl component="fieldset" margin="normal">
            <RadioGroup
              aria-label="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="PayPal"
              />
            </RadioGroup>
          </FormControl>
          {/* Campos de tarjeta de crédito */}
          {paymentMethod === 'creditCard' && (
            <>
              <TextField
                label="Cardholder Name"
                fullWidth
                variant="outlined"
                margin="normal"
                value={creditCard.cardName}
                onChange={(e) => setCreditCard({ ...creditCard, cardName: e.target.value })}
              />
              <TextField
                label="Card Number"
                fullWidth
                variant="outlined"
                margin="normal"
                value={creditCard.cardNumber}
                onChange={(e) => setCreditCard({ ...creditCard, cardNumber: e.target.value })}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiration Date"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={creditCard.expDate}
                    onChange={(e) => setCreditCard({ ...creditCard, expDate: e.target.value })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={creditCard.cvv}
                    onChange={(e) => setCreditCard({ ...creditCard, cvv: e.target.value })}
                  />
                </Grid>
              </Grid>
              {/* Botón de "Realizar Pago" para tarjeta de crédito */}
              <Button
                variant="contained"
                onClick={handleCreditCardPayment}
                sx={{ mt: 3 }}
                disabled={!isCreditCardFormFilled()}
              >
                Pagar con Tarjeta de Crédito
              </Button>
            </>
          )}
          {/* Campos de PayPal */}
          {paymentMethod === 'paypal' && (
            <>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
                value={paypal.email}
                onChange={(e) => setPaypal({ ...paypal, email: e.target.value })}
              />
              {/* Botón de PayPal */}
              <PayPalScriptProvider options={{ 'client-id': 'tu-client-id-de-PayPal' }}>
                <PayPalButtons
                  style={{ layout: 'horizontal' }}
                  createOrder={(data, actions) => {
                    // Lógica para crear la orden de PayPal
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: totalAmount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    // Lógica para la aprobación del pago de PayPal
                    return actions.order.capture().then((details) => {
                      alert(`Pago con PayPal exitoso. ¡Gracias por tu orden!`);
                      handlePaymentSuccess();
                    });
                  }}
                  onError={(err) => console.error(err)}
                  options={{ clientId: 'tu-client-id-de-PayPal' }}
                />
              </PayPalScriptProvider>
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
