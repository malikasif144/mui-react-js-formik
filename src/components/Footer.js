import React from "react";
import { Container, Grid, Box, Link, styled } from "@mui/material";
const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
    color:"#864313"
  },
});
const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="#D7C1B1"
        color="white"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4} textAlign="center">
              <Box borderBottom={2} borderColor="#864313">
                Help
              </Box>
              <Box pt={1}>
                <LinkStyled href="/">Contact</LinkStyled>
              </Box>
              <Box>
                <LinkStyled href="/">Support</LinkStyled>
              </Box>
              <Box>
                <LinkStyled href="/">Privacy</LinkStyled>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Box borderBottom={2} borderColor="#864313">
                Account
              </Box>
              <Box pt={1}>
                <LinkStyled href="/">Login</LinkStyled>
              </Box>
              <Box>
                <LinkStyled href="/">Register</LinkStyled>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Box borderBottom={2} borderColor="#864313">
                Messages
              </Box>
              <Box pt={1}>
                <LinkStyled href="/">Backup</LinkStyled>
              </Box>
              <Box>
                <LinkStyled href="/">History</LinkStyled>
              </Box>
              <Box>
                <LinkStyled href="/">Roll</LinkStyled>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box pt={3} pb={3} bgcolor="#864313" color="white" textAlign="center">
        Anywhere Cakes, a TT44 Company
      </Box>
    </footer>
  );
};

export default Footer;
