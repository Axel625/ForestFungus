import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Information() {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
    
  );
}
