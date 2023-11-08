import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../StateProvider";
import imagen1 from "../Assets/fondo.jpg";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const PageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
});

const ContentContainer = styled("div")({
    flex: 1,
    backgroundImage: `url(${imagen1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    overflow: "hidden",
});

const Footer = styled(Card)({
    marginTop: "20px",
    marginBottom: "20px",
});

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

    const clearBasket = () => {
        dispatch({
            type: "CLEAR_BASKET",
        });
    };

    return (
        <PageContainer>
            <ContentContainer>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography align="center" gutterBottom variant="h4">
                            Shopping Cart
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={8} md={9} container spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid xs={12} sm={4} md={3} container spacing={3}>
                        <Typography align="center" gutterBottom variant="h4">
                            <Total />
                        </Typography>
                        <Button
                            variant="contained"
                            color="success"
                            style={{
                                marginTop: "16px",
                                marginBottom: "16px",
                                maxHeight: "50px",
                                height: "50px",
                            }}
                            onClick={clearBasket}
                        >
                            Clear Cart
                        </Button>
                    </Grid>
                </Grid>
            </ContentContainer>
            <Footer variant="outlined">
                <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Contacto: ejemplo@correo.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Nombre de la empresa: Forest Fungus
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Lugar: Capulhuac
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Telefono: 725 659 4235
                    </Typography>
                </CardContent>
            </Footer>
        </PageContainer>
    );
};

export default CheckoutPage;
