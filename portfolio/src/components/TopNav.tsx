import "./TopNav.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LinkedIn, GitHub } from "@mui/icons-material";

const pages = ["About", "Projects", "Contact", "Blog"];

const TopNav = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            color="inherit"
            sx={{
              fontFamily: "Italiana",
              fontWeight: 400,
              textDecoration: "none",
            }}
            flexGrow={1}
          >
            Alex.Tanth
          </Typography>
          <Box
            sx={{
              ".navButton": {
                color: "primary.contrastText",
                borderColor: "primary.main",
                margin: "0px 5px",
                fontFamily: "Italiana",
                fontWeight: 400,
                textDecoration: "none",
              },
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#about"
              color="inherit"
              className="navButton"
            >
              About
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/blog"
              color="inherit"
              className="navButton"
            >
              Projects
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/blog"
              color="inherit"
              className="navButton"
            >
              Contact
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/blog"
              color="inherit"
              className="navButton"
            >
              Blog
            </Typography>
            <LinkedIn sx={{ color: "primary.contrastText" }}></LinkedIn>
            <GitHub sx={{ color: "primary.contrastText" }}> </GitHub>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
