import React from "react";
import accounting from "accounting";
import { Button, Typography, Box } from "@mui/material";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from '../StateProvider';
import { useNavigate } from "react-router-dom";

const Total = () => {
    const [{ basket }] = useStateValue(); 
    const totalAmount = getBasketTotal(basket);
    const navigate = useNavigate(); 

    const handleCheckOut = () => {
        
        navigate("/Verificacion");
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px solid #ccc"
            padding="16px"
            borderRadius="4px"
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.1)"
        >
            <Typography variant="h6" gutterBottom style={{ color: 'green' }}>
                Total items: {basket?.length}
            </Typography>
            <Typography variant="h4" color="primary" style={{ color: 'green' }}>
                {accounting.formatMoney(totalAmount, "$")}
            </Typography>
            <Button
                variant="contained"
                color="success"
                style={{ marginBottom: "8px", width: "100%" }}
                onClick={handleCheckOut} // Asigna la función de manejo al evento onClick
            >
                Buy
            </Button>
        </Box>
    );
}

export default Total;
