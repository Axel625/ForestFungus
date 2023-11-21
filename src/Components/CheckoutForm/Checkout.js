// Checkout.jsx
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import AddressForm from '../CheckoutForm/Addressform';  // Ruta actualizada
import PaymentForm from '../CheckoutForm/Paymentform';  // Ruta actualizada
import Review from '../CheckoutForm/Review';  // Ruta actualizada
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";

const Footer = styled(Card)({
  marginTop: "20px",
  marginBottom: "20px",
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <AddressForm
                  onNext={handleNext}
                  onBack={handleBack}
                  formData={formData}
                  setFormData={updateFormData}
                />
              )}
              {activeStep === 1 && (
                <PaymentForm
                  onNext={handleNext}
                  onBack={handleBack}
                  formData={formData}
                  setFormData={updateFormData}
                />
              )}
              {activeStep === 2 && (
                <Review formData={formData} />
              )}
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <div>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          Distraete jugando un rato
        </Button>
      </div>
      <Footer variant="outlined">
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            Contacto: ejemplo@correo.com
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Nombre de la empresa: Forest Fungus
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Lugar: Capulhuac
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Telefono: 725 659 4235
          </Typography>
        </CardContent>
      </Footer>
    </React.Fragment>
  );
}
