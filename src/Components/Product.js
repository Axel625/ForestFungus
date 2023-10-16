import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from '@mui/icons-material';
import { actionTypes } from '../Reducer';
import {useStateValue} from '../StateProvider'
import Information from './Information';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product({ products: { id, name, productType, image, price, description } }) {

    const[{basket}, dispatch] = useStateValue();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id,
                name,
                productType,
                image,
                price,
                description,
            }
        })
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <Typography
                        variant='h5'
                        color='textsecondary'>
                        {accounting.formatMoney(price, "$")}
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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Galleta dulce
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={addToBasket}>
                    <AddShoppingCart fontSize='large' />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {description}
                    </Typography>

                </CardContent>

                
            </Collapse>
            
        </Card>
    
            
    );
}
