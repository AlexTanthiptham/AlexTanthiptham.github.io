import React from "react";
import "./Landing.css";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import profile from "../assets/profile.jpg";

/* TODO:
  - Revise to use MUI components for typographys and images

*/

const Landing = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ".textBold": {
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 600,
          textDecoration: "none",
        },
        ".textRegular": {
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 400,
          textDecoration: "none",
        },
        ".textInika": {
          fontFamily: "Inika",
        },
        ".textItaliana": {
          fontFamily: "Italiana",
        },
        ".sectionHeader": {
          fontFamily: "Inika",
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 400,
          textDecoration: "none",
        },
      }}
    >
      <Container id="about" maxWidth="md">
        <Grid container spacing={4} sx={{ "& > *": { padding: "1vw" } }}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                maxHeight: "100%",
              }}
              src={profile}
              alt="Profile"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <h2>Hi I'm</h2>
            <h1>Alex</h1>
            <h3>B.S. Electrical Engineering at UIUC '23</h3>
            <Box>
              Recent graduate from UIUC. Experience with PCB design, computer
              vision. Interest in computer vision, robotics, autonomous systems
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container id="experience" maxWidth="md">
        <Grid>
          <Typography variant="h3" className="sectionHeader">
            Experience
          </Typography>
          <Box>
            <Typography variant="h4" className="textBold textInika">
              Position Title
            </Typography>
            <Typography variant="h4" className="textRegular textInika">
              Location
            </Typography>
            <Typography variant="body1" className="textRegular textInika">
              Body {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
      </Container>
      <Divider />
      <Container id="projects" maxWidth="md">
        <Typography variant="h3" className="sectionHeader">
          Projects
        </Typography>
      </Container>
      <Divider />
      <Container id="contact" maxWidth="md">
        <Typography variant="h3" className="sectionHeader">
          Contact
        </Typography>
      </Container>
    </Box>
  );
};

export default Landing;
