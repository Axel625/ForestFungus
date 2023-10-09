import React from "react";
import accounting from "accounting";
import { Button, Typography, Box } from "@mui/material";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";

const Total = () => {
    const [{ basket }] = useStateValue();
    const totalAmount = getBasketTotal(basket);

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
            <Typography variant="h6" gutterBottom>
                Total items: {basket?.length}
            </Typography>
            <Typography variant="h4" color="primary">
                {accounting.formatMoney(totalAmount, "$")}
            </Typography>
            <Link to="/Verificacion">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "16px" }}
                >
                    Check Out
                </Button>
            </Link>
        </Box>
    );
}

export default Total;
