import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControlLabel, Checkbox } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/register/', 
});

const defaultTheme = createTheme();

function SignUpForm({ onSubmit }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSuccess(false);
    setShowErrorAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    api.post('', {
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
      
    })
      .then((response) => {
        console.log('Usuario creado con éxito', response.data);

        setIsRegistered(true);
        setSuccessMessage('Registro exitoso. Redirigiendo a la página de inicio de sesión...');
        setShowSuccess(true);

        setTimeout(() => {
          onSubmit(true);
        }, 2000);
      })
      .catch((error) => {
        onSubmit(false);
        console.error('Error al crear el usuario', error);

        // Mostrar alerta de error
        setShowErrorAlert(true);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="UserName"
                  type="username"
                  id="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
              >
                {successMessage}
              </MuiAlert>
            </Snackbar>

            {/* Mostrar la alerta de error si showErrorAlert es true :) */}
            <Snackbar
              open={showErrorAlert}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="error"
                sx={{ backgroundColor: 'red', color: 'white' }}
              >
                Lo siento, ha ocurrido un error al crear la cuenta D: Por favor, verifica tus datos e intenta nuevamente c:
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

function SignUp() {
  const handleRedirect = (redirect) => {
    if(redirect) {
      window.location.href = '/productos'; 
    }
  };

  return <SignUpForm onSubmit={handleRedirect} />;
}

export default SignUp;