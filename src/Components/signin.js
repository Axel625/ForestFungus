import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const defaultTheme = createTheme();

const SignIn = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    try {
      const response = await axios.post('https://back-production-f226.up.railway.app/api/login/', {
        username,
        password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);

        setShowSuccessAlert(true);

        setTimeout(() => {
          setShowSuccessAlert(false);
          window.location.href = '/productos';
        }, 2000);
      } else {
        setShowErrorAlert(true);
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      setShowErrorAlert(true);
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
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to="/registro">
                  Don't have an account? Sign Up
                </RouterLink>  
              </Grid>
            </Grid>
            
            <Snackbar
              open={showSuccessAlert}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MuiAlert 
                elevation={6}
                variant="filled"
                severity="success"
                sx={{ backgroundColor: 'green', color: 'white' }}
              >
                ¡Has ingresado con éxito! Disfruta de nuestros productos  
              </MuiAlert>
            </Snackbar>

            <Snackbar
              open={showErrorAlert}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal:'left' }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                severity="error"
                sx={{ backgroundColor: 'red', color: 'white' }}
              >
                Lo siento, las credenciales no coinciden. Intenta de nuevo.
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;