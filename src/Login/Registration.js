import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Registration() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          Nombre="Nombre"
          label="Required"
          defaultValue="Name"
        />
        <TextField
          required
          Email="Correo Electronico"
          label="Required"
          defaultValue="Email"
        />
        <TextField
          password="Contraseña"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}
