import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export default function PaymentForm({ onNext, formData, setFormData }) {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (
      (paymentMethod === 'creditCard' &&
        formData.cardName &&
        formData.cardNumber &&
        formData.expDate &&
        formData.cvv) ||
      (paymentMethod === 'paypal' && formData.paypalEmail)
    ) {
      onNext();
    } else {
      alert('Todos los campos obligatorios deben estar llenos.');
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <FormControlLabel
            value="creditCard"
            control={<Radio color="primary" />}
            label="Credit Card"
          />
          <FormControlLabel
            value="paypal"
            control={<Radio color="primary" />}
            label="PayPal"
          />
        </RadioGroup>
      </FormControl>
      {paymentMethod === 'creditCard' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              name="cardName"  
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              onChange={handleInputChange}
              value={formData.cardName || ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"  
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              onChange={handleInputChange}
              value={formData.cardNumber || ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              name="expDate"  
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              onChange={handleInputChange}
              value={formData.expDate || ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"  
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              onChange={handleInputChange}
              value={formData.cvv || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      )}
      {paymentMethod === 'paypal' && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="paypalEmail"
              name="paypalEmail"  
              label="PayPal Email"
              fullWidth
              autoComplete="email"
              variant="standard"
              onChange={handleInputChange}
              value={formData.paypalEmail || ''}
            />
          </Grid>
        </Grid>
      )}
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </React.Fragment>
  );
}
