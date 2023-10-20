import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Establece la URL de tu marca de agua
const watermarkImageUrl = '/path/to/your-watermark-image.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const centeredCardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centra verticalmente
  alignItems: 'center', // Centra horizontalmente
  height: '100%',
};


export default function RowAndColumnSpacing() {
    const presentationBackgroundStyle = {
        backgroundImage: `url(${watermarkImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5, // Ajusta la opacidad para la marca de agua
    };
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} sx={centeredCardContentStyle}>
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadaauf1yTolnYaXHnWHMnT_tJ5w6FzgxQtQ&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent sx={centeredCardContentStyle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={6} sx={centeredCardContentStyle}>
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadaauf1yTolnYaXHnWHMnT_tJ5w6FzgxQtQ&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent sx={centeredCardContentStyle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={6} sx={centeredCardContentStyle}>
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnqJNH948sgZSieDsECWqyV31lHjlCUCVA&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent sx={centeredCardContentStyle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={6} sx={centeredCardContentStyle}>
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnqJNH948sgZSieDsECWqyV31lHjlCUCVA&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
