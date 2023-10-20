import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'yellow   ' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  alignItems: 'center'
}));

export default function Information() {
  return (

    <Box sx={{ flexGrow: 1, display: 'static', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={3} columns={10}>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Item>
            <Grid container justifyContent="center">
              <Card sx={{ maxWidth: 600, textAlign: 'center', border: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                    Propuesta de valor
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                    Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo, que
                    ayuda a proporcionar un estado de tranquilidad a personas mayores de 18 al inducir un
                    estado de relajación (Problemas de estrés, ansiedad y depresión)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Item>
            <Grid container justifyContent="center">
              <Card sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                    Misión
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                    Forest Fungus ofrece productos alimenticios que permanezcan en la preferencia del consumidor,
                    por su innovación, sabor inigualable, calidad, frescura y función relajante hacia el estrés,
                    ansiedad y problemas de depresión; siempre responsables con el cuidado del ambiente.
                    <br /><br /><br />
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Item>
            <Grid container justifyContent="center">
              <Card sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                    Vision
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>

                    Forest Fungus tiende a ser una empresa innovadora dentro del sector alimenticio,
                    ofreciendo productos horneados de calidad,
                    siendo empresa líder en la zona céntrica de la República Mexicana.
                    <br /><br /><br /><br />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5} style={{ textAlign: 'left' }}>
          <Item>
            <Grid container justifyContent="center">
              <Card sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                    Valores
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                    Fidelidad, creando una red de confianza.<br />
                    Orientación al cliente.<br />
                    Respeto en el área de trabajo y para nuestros consumidores.<br />
                    Equilibrio.<br />
                    Seguridad alimentaria.<br />
                    Talento.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Grid container justifyContent="center">
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                Contacto
              </Typography>
              <Grid container justifyContent="center">
                <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                  Dirección: Santa Maria Atarasquillo<br />
                  Ciudad: Lerma<br />
                  Teléfono: (729) 456-7890<br />
                  Correo Electrónico: example@example.com
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Box >

  );
}
