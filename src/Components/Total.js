import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";

const Total = () => {
    return(
        <div>
<h5>Total items: 3</h5>
<h5>{accounting.formatMoney(145,"$")}</h5>
<Button variant="contained" sx={{ backgroundColor: 'black' }}>Check Out</Button>
        </div>
    )
}

export default Total;