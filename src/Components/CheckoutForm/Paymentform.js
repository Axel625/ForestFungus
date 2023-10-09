import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = React.useState("creditCard");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
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
          {/* Agrega más métodos de pago aquí si es necesario */}
        </RadioGroup>
      </FormControl>
      {paymentMethod === "creditCard" && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      )}
      {paymentMethod === "paypal" && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="paypalEmail"
              label="PayPal Email"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
