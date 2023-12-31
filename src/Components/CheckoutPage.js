import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import { useStateValue } from '../StateProvider';
import imagen1 from '../Assets/fondo.jpg';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Footer = styled(Card)({
    marginTop: '20px',
    backgroundColor: 'black',
  color: 'white',
  padding: '15px', 
  boxSizing: 'border-box',  
  textAlign: 'center',
});

const CheckoutPage = () => {
    const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid xs={12} sm={8} md={6} lg={4} key={item.id}>
                        <CheckoutCard products={item} />
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
        minHeight: '100vh',
        overflow: 'hidden',
    };

    const clearBasket = () => {
        dispatch({
            type: 'CLEAR_BASKET',
        });
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
                    <Button
                        variant="contained"
                        color="success"
                        style={{ marginTop: '16px', marginBottom: '16px', maxHeight: '50px', height: '50px' }}
                        onClick={clearBasket}
                    >
                        Clear Cart
                    </Button>
                </Grid>
            </Grid>
            <Footer variant="outlined">
                <CardContent>
                    <Typography variant="body2" color="white" align="center">
                    Contacto: Honlleta8@gmail.com
                    </Typography>
                    <Typography variant="body2" color="white" align="center">
                        Nombre de la empresa: Forest Fungus
                    </Typography>
                    <Typography variant="body2" color="white" align="center">
                        Lugar: Capulhuac
                    </Typography>
                    <Typography variant="body2" color="white" align="center">
                        Telefono: 725 659 4235
                    </Typography>
                </CardContent>
            </Footer>
        </div>
    );
};

export default CheckoutPage;
