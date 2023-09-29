import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CheckoutCard from "../Components/CheckoutCard";
import products from '../Product-data';
import Product from "./Product";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


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
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Item><Product key={products.id} products={item} /></Item>
                    </Grid>
                ))}

            </React.Fragment>
        );
    }
    return (
        
        <Grid container spacing={3}>
            <Grid item xs={24}>
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid xs={24} sm={12} md={10} container spacing={3}>
                <FormRow />
            </Grid> <Grid xs={24} sm={12} md={10} container spacing={3}>
                <Typography align="center" gutterBottom variant="h4">
                     Total 
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CheckoutPage;