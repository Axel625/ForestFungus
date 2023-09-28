import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        Nombre="Nombre"
        label="Required"
        defaultValue="Name"
      />
      <TextField
        password="Contraseña"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Stack>

  );
}

      
    
