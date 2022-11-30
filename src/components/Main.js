import { Height } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cake from "../images/cake.png";

const Main = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h3" color="inherit">
          A bliss in every byte
        </Typography>
        <Typography variant="h5" color="inherit">
          we offer tasty cakes and sweets for you
        </Typography>
        <Button variant="contained" size="large" sx={{ borderRadius: 5 ,mt:1 }}>
          Call Us
        </Button>
      </Grid>
      <Grid
        container
        justifyItems="center"
        item
        xs={10}
        sm={6}
        order={{ xs: 1, sm: 2 }}
      >
        <Box component="img"  src={Cake} />
      </Grid>
    </Grid>
  );
};

export default Main;
