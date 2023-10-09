import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider'


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
                    <Total />
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CheckoutPage;