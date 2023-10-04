import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';



export default function CheckoutCard({products : {id, name, productType, image, price, description}}) {
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <Typography
                        variant='h5'
                        color='textsecondary'>
                        {accounting.formatMoney(price,"$")}
                    </Typography>
                }
                title={name}
                subheader={productType}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
            />
            <IconButton>
            <CardActions disableSpacing>
                <DeleteIcon fontSize="large"/>
            </CardActions>
            </IconButton>
        </Card>
    );
}
