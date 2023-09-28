import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Information() {
  return (
    <Box sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={4} columns={20}>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Item>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Propuesta de valor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo, que
                  ayuda a proporcionar  un estado de tranquilidad a personas mayores de 18  al inducir un
                  estado de relajación (Problemas de estrés, ansiedad y depresion)
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Item><Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              image="https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mision
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo, que
                ayuda a proporcionar  un estado de tranquilidad a personas mayores de 18  al inducir un
                estado de relajación (Problemas de estrés, ansiedad y depresion)
              </Typography>
            </CardContent>
          </Card>
          </Item>
        </Grid>
        <Grid item xs={24} sm={12} md={10} lg={5}>
          <Item><Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              image="https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vision
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo, que
                ayuda a proporcionar  un estado de tranquilidad a personas mayores de 18  al inducir un
                estado de relajación (Problemas de estrés, ansiedad y depresion)
              </Typography>
            </CardContent>
          </Card>
          </Item>
        </Grid>
        <Grid itemxs={24} sm={12} md={10} lg={5}>
          <Item><Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              image="https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Valores
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Forest fungus ofrece una galleta funcional elaborada con camote y hongos cucumelo, que
                ayuda a proporcionar  un estado de tranquilidad a personas mayores de 18  al inducir un
                estado de relajación (Problemas de estrés, ansiedad y depresion)
              </Typography>
            </CardContent>
          </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
