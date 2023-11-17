// PaymentForm.js

import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useStateValue } from "../../Stateprovider"; // Ajusta la ruta según tu estructura

export default function PaymentForm() {
  const [{ total }, dispatch] = useStateValue();
  const [showPayPalButton, setShowPayPalButton] = React.useState(false);

  const handlePayPalCheckboxChange = () => {
    setShowPayPalButton(!showPayPalButton);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Total: {total} {/* Muestra el total */}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={showPayPalButton}
                onChange={handlePayPalCheckboxChange}
              />
            }
            label="Tengo una cuenta PayPal y deseo pagar con ella"
          />
        </Grid>
      </Grid>

      {showPayPalButton && (
        <PayPalScriptProvider options={{ clientId: "AcoIHbHcpZtMDEOLlcP50_yRYh3e6GxJwGXV0l-qBONXSKEsqyhKpKoCcs-AD4p7QHxssxAwmZCSGomY" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
      )}
    </React.Fragment>
  );
}
