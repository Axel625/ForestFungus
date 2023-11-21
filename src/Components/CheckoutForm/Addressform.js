// AddressForm.jsx
import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function AddressForm({ onNext, formData, setFormData }) {
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address1: false,
    city: false,
    zip: false,
    country: false,
  });

  const lastNameRef = useRef(null);
  const address1Ref = useRef(null);
  const cityRef = useRef(null);
  const zipRef = useRef(null);
  const countryRef = useRef(null);

  const areAllFieldsFilled = () => {
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
    emptyFields.forEach((field) => {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [field]: true,
      }));
    });
    return emptyFields.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleNext = () => {
    if (areAllFieldsFilled()) {
      onNext();
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleInputChange}
            value={formData.firstName}
            error={formErrors.firstName}
            helperText={formErrors.firstName ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('firstName')}
            inputRef={lastNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleInputChange}
            value={formData.lastName}
            error={formErrors.lastName}
            helperText={formErrors.lastName ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('lastName')}
            inputRef={address1Ref}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleInputChange}
            value={formData.address1}
            error={formErrors.address1}
            helperText={formErrors.address1 ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('address1')}
            inputRef={cityRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleInputChange}
            value={formData.city}
            error={formErrors.city}
            helperText={formErrors.city ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('city')}
            inputRef={zipRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleInputChange}
            value={formData.zip}
            error={formErrors.zip}
            helperText={formErrors.zip ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('zip')}
            inputRef={countryRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleInputChange}
            value={formData.country}
            error={formErrors.country}
            helperText={formErrors.country ? 'Este campo es obligatorio' : ''}
            onBlur={() => setFormData('country')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </React.Fragment>
  );
}
