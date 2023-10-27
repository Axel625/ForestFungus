import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider';
import imagen1 from '../Assets/fondo.jpg';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Typography';


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

const CheckoutPage = () => {
    const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} products={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    const pageStyle = {
        backgroundImage: `url(${imagen1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Establece la altura del 100% de la vista del navegador
        overflow: 'hidden', // Evita que la página sea desplazable
    };

    return (
        <div style={pageStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant="h4">
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid xs={12} sm={8} md={9} container spacing={3}>
                    <FormRow />
                </Grid>
                <Grid xs={12} sm={4} md={3} container spacing={3}>
                    <Typography align="center" gutterBottom variant="h4">
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}

export default CheckoutPage;
