import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { getBasketTotal } from "../Reducer";
import {useStateValue} from '../StateProvider';


const Total = () => {
    const[{basket}] = useStateValue();
    return(
        <div>
<h5>Total items: {basket?.length}</h5>
<h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>
<Button variant="contained" sx={{ backgroundColor: 'black' }}>Check Out</Button>
        </div>
    )
}

export default Total;