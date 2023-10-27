import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <Card variant="outlined" sx={{ my: 4 }}>
          <CardContent>
              {/* Contenido de tu footer aquí */}
              <Typography variant="body2" color="text.secondary" align="center">
                  Contacto: ejemplo@correo.com
              </Typography>
          </CardContent>
      </Card>
  );
}

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', // Cambia los colores de fondo según el modo
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  alignItems: 'center'
}));

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', // Cambia los colores de fondo según el modo
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export default function Information() {
  return (
    <Box sx={{ flexGrow: 1, display: 'static', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={3} columns={10}>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <CustomBox>
            <Grid container justifyContent="center">
              <CustomCard sx={{ maxWidth: 600, textAlign: 'center', border: 'none' }}>
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
              </CustomCard>
            </Grid>
          </CustomBox>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <CustomBox>
            <Grid container justifyContent="center">
              <CustomCard sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
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
              </CustomCard>
            </Grid>
          </CustomBox>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <CustomBox>
            <Grid container justifyContent="center">
              <CustomCard sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                    Vision
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                    Forest Fungus tiende a ser una empresa innovadora dentro del sector alimenticio,
                    ofreciendo productos horneados de calidad,
                    siendo empresa líder en la zona céntrica de la República Mexicana.
                    <br /><br /><br /><br /><br />
                  </Typography>
                </CardContent>
              </CustomCard>
            </Grid>
          </CustomBox>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5} style={{ textAlign: 'left' }}>
          <CustomBox>
            <Grid container justifyContent="center">
              <CustomCard sx={{ maxWidth: 500, textAlign: 'Left', border: 'none' }}>
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
              </CustomCard>
            </Grid>
          </CustomBox>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <CustomBox>
            <Grid container justifyContent="center">
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
                  Contacto
                </Typography>
                <CardActions>
                  <Link to="/miebros_del_equipo">
                    <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
                      <Button size="small" color="primary">
                        <h1>Show more</h1>
                      </Button>
                    </Typography>
                  </Link>
                </CardActions>
              </CardContent>
            </Grid>
          </CustomBox>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
