import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSpring, animated } from 'react-spring';

const Footer = styled(Card)({
  marginTop: '20px',
  backgroundColor: 'black',
  color: 'white',
  padding: '15px', 
  boxSizing: 'border-box',  
  textAlign: 'center',
});


const AnimatedCard = animated(Card);

const CustomCard = styled(AnimatedCard)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  border-radius: 16px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Information() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CustomCard
            style={props}
            sx={{ bgcolor: '#f3d2c1' }}
          >
            <Avatar
              variant="rounded"
              sx={{ width: 100, height: 100, m: '0 auto' }}
            >
              <AssignmentIcon sx={{ fontSize: 60 }} />
            </Avatar>

            <Typography variant="h4">Propuesta de Valor</Typography>

            <Typography variant="h6" color="text.secondary" style={{ textAlign: 'center' }}>
              Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo,<br/> 
              que ayuda a proporcionar un estado de tranquilidad a personas mayores de 18 al inducir un estado de relajación.
            </Typography>
          </CustomCard>
        </Grid>

        <Grid item xs={6}>
          <CustomCard
            style={props}
            sx={{ bgcolor: '#d7e9f7' }}
          >
            <Avatar
              variant="square"
              sx={{ width: 100, height: 100, m: '0 auto' }}
            >
              <VisibilityIcon sx={{ fontSize: 60 }} />
            </Avatar>

            <Typography variant="h4">Misión</Typography>

            <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
              Forest Fungus ofrece productos alimenticios que permanezcan en la preferencia del consumidor,<br/> 
              por su innovación, sabor inigualable, calidad, frescura y función relajante hacia el estrés,<br/> 
              ansiedad y problemas de depresión; siempre responsables con el cuidado del ambiente.
            </Typography>
          </CustomCard>
        </Grid>

        <Grid item xs={6}>
          <CustomCard
            style={props}
            sx={{ bgcolor: '#f6f2d4' }}
          >
            <Avatar
              variant="rounded"
              sx={{ width: 100, height: 100, m: '0 auto', bgcolor: 'primary.main' }}
            >
              <FavoriteIcon sx={{ fontSize: 60 }} />
            </Avatar>

            <Typography variant="h4" color="textPrimary">
              Visión
            </Typography>

            <Typography variant="h6" color="text.secondary" style={{ textAlign: 'left' }}>
              Forest Fungus tiende a ser una empresa innovadora dentro del sector alimenticio,<br/>
              ofreciendo productos horneados de calidad, siendo empresa líder en la zona céntrica de la República Mexicana.
              <br/><br/><br/>
            </Typography>
          </CustomCard>
        </Grid>
        
        <Grid item xs={12}>
          <CustomCard
            style={props}
            sx={{ bgcolor: '#c1ffc1' }}
          >
            <Avatar
              variant="rounded"
              sx={{ width: 100, height: 100, m: '0 auto' }}
            >
              <AssignmentIcon sx={{ fontSize: 60 }} />
            </Avatar>

            <Typography variant="h4">Valores</Typography>

            <Typography variant="h6" color="text.secondary" style={{ textAlign: 'center' }}>
              Fidelidad, creando una red de confianza.<br />
              Orientación al cliente.<br />
              Respeto en el área de trabajo y para nuestros consumidores.<br />
              Equilibrio.<br />
              Seguridad alimentaria.<br />
              Talento.
            </Typography>
          </CustomCard>
        </Grid>
      </Grid>

      <Footer variant="outlined">
        <CardContent>
          <Typography variant="body2" color="White" align="center">
            Contacto: Honlleta8@gmail.com
          </Typography>
          <Typography variant="body2" color="White" align="center">
            Nombre de la empresa: Forest Fungus
          </Typography>
          <Typography variant="body2" color="White" align="center">
            Lugar: Capulhuac
          </Typography>
          <Typography variant="body2" color="White" align="center">
            Telefono: 725 659 4235
          </Typography>
        </CardContent>
      </Footer>
    </Box>
  );
}
