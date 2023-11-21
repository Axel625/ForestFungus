import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CheckoutCard({
  products: { id, name, productType, image, price, description },
}) {
  const [{ basket }, dispatch] = useStateValue();
  const [openDialog, setOpenDialog] = React.useState(false);

  const removeItem = () => {
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });
    setOpenDialog(false);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="h5" color="textsecondary">
            {accounting.formatMoney(price, '$')}
          </Typography>
        }
        title={name}
        subheader={productType}
      />
      <CardMedia component="img" height="194" image={image} />
      <IconButton>
        <CardActions disableSpacing>
          <DeleteIcon fontSize="large" onClick={removeItem} color="error"/>
        </CardActions>
      </IconButton>

      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este artículo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
