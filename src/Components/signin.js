import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const SignIn = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSuccessAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });

      const token = response.data.token;

      if (token) {
        // Almacena el token en el almacenamiento local para su uso futuro
        localStorage.setItem('token', token);

        // Muestra la alerta de éxito
        setShowSuccessAlert(true);

        // Puedes ajustar el tiempo de visualización de la alerta si es necesario
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2000); // Mostrar la alerta por 2 segundos

        // Redirige al usuario a la página de productos
        window.location.href = '/productos';
      } else {
        console.error('El token no se recibió en la respuesta');
        // Puedes manejar el caso en que no se reciba el token, por ejemplo, mostrando un mensaje de error
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      // Manejar el error, como mostrar un mensaje de error al usuario
    }
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link to="/Registro">
              {"Don't have an account? Sign Up"}
            </Link>

            {/* Mostrar la alerta de éxito si showSuccessAlert es true */}
            <Snackbar
              open={showSuccessAlert}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                sx={{ backgroundColor: 'green', color: 'white' }}
              >
                ¡Has ingresado con éxito! Disfruta de nuestros productos :D
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
