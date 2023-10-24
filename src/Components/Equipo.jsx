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
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


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
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnqJNH948sgZSieDsECWqyV31lHjlCUCVA&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent sx={centeredCardContentStyle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ana Minerva Bobadilla Cejudo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Director de Proyecto (Biotecnologia)
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
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
                                       Victor Manuel Nava Alamo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
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
                                       Nallely Reyes Vidal 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
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
                                        Montserrat Gonzales Zarco
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
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
                                       Denni De Jesus Fernandez
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Director de proyecto (Desarrollo y Gestion de Software)
                                    </Typography>
                                    <Link to="https://instagram.com/denndjf_21?igshid=YTQwZjQ0NmI0OA==">
                                    <InstagramIcon/>
                                    </Link>
                                    <Link to="https://www.facebook.com/denny.djf?mibextid=ZbWKwL">
                                    <FacebookIcon/>
                                    </Link>
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
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Axel Yael Sanbria Lopez
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       
                                    </Typography>
                                    <Link to="https://instagram.com/yaxel7w7?igshid=NGVhN2U2NjQ0Yg==">
                                    <InstagramIcon/>
                                    </Link>
                                    <Link to="https://www.facebook.com/axelyaelsanabria?mibextid=ZbWKwL">
                                    <FacebookIcon/>
                                    </Link>
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
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Maximiliano Canseco Reyes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
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
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Carlos Erique Hernandez Hernandez
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        
                                    </Typography>
                                    <Link to="">
                                    <InstagramIcon/>
                                    </Link>
                                    <FacebookIcon/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
