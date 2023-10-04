import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import products from '../Product-data';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CheckoutPage = () => {
    function FormRow() {
        return (
            <React.Fragment>
                {products.map((item) => (
                    <Grid xs={12} sm={8} md={6} lg={4}>
                        <Item><CheckoutCard key={products.id} products={item} /></Item>
                    </Grid>
                ))}

            </React.Fragment>
        );
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid xs={12} sm={8} md={9} container spacing={3}>
                <FormRow />
            </Grid> <Grid xs={12} sm={4} md={3} container spacing={3}>
                <Typography align="center" gutterBottom variant="h4">
                    <Total/>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CheckoutPage;