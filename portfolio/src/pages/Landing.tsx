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

// TODO: Clean up image imports
import profile from "../assets/profile.jpg";
import projectBiped from "../assets/project-icons/project-biped.png";
import projectGemev from "../assets/project-icons/project-gemev.png";
import projectTagAlong from "../assets/project-icons/project-tagalong.png";
import projectVisat from "../assets/project-icons/project-visat.png";

/* TODO:
  - Revise to use MUI components for typographys and images

*/

const Landing = () => {
  const theme = useTheme();
  return (
    <Container
      id="landing"
      maxWidth={false}
      disableGutters
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
        ".stackedText": {
          "& > *": {
            paddingBottom: 1,
          },
        },
        "& > *": {
          paddingBottom: 2,
        },
      }}
    >
      <div> HELLOWORLD TEST</div>
      <Container
        id="about"
        maxWidth="lg"
        sx={{
          height: {
            xs: "auto", // No set height for sizes smaller than xs
            sm: "100vh", // height=100vh for screen sizes larger than sm
          },
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={5}
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
          <Grid item xs={12} sm={7} className="stackedText">
            <Typography variant="h3" className="textItaliana textRegular">
              Hi I'm
            </Typography>
            <Typography variant="h1" className="textItaliana textRegular">
              Alex
            </Typography>
            <Typography variant="h5" className="textInika textRegular">
              B.S. Electrical Engineering at UIUC '23
            </Typography>
            <Typography variant="body1" className="textInika textRegular">
              Recent graduate from UIUC. Experience with PCB design, computer
              vision. Interest in computer vision, robotics, autonomous systems.
              Looking for full-time opportunities.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        id="experience"
        maxWidth="lg"
        sx={{
          ".expContainer": {
            "& > *": {
              paddingTop: 0.25,
              paddingBottom: 0.25,
            },
            paddingBottom: 1,
          },
        }}
      >
        <Typography variant="h3" className="sectionHeader">
          Experience
        </Typography>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Software Engineer
          </Typography>
          <Typography variant="h5" className="textRegular textInika">
            Location
          </Typography>
          <Typography variant="body1" className="textRegular textInika">
            Body <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Position Title
          </Typography>
          <Typography variant="h5" className="textRegular textInika">
            Location
          </Typography>
          <Typography variant="body1" className="textRegular textInika">
            Body <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Position Title
          </Typography>
          <Typography variant="h5" className="textRegular textInika">
            Location
          </Typography>
          <Typography variant="body1" className="textRegular textInika">
            Body {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Position Title
          </Typography>
          <Typography variant="h5" className="textRegular textInika">
            Location
          </Typography>
          <Typography variant="body1" className="textRegular textInika">
            Body {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
      </Container>

      <Container id="projects" maxWidth={false} disableGutters>
        <Container id="projects" maxWidth="lg">
          <Typography variant="h3" className="sectionHeader">
            Projects
          </Typography>
        </Container>
        <Grid
          container
          spacing={0}
          sx={{
            ".projectContainer": {
              position: "relative",
              width: "100%",
              paddingTop: "100%", // 1:1 aspect ratio
              overflow: "hidden",
            },
            ".projectImage": {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box className="projectContainer">
              <Box
                component="img"
                src={projectBiped}
                alt={"Biped"}
                className="projectImage"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {" "}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {" "}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {" "}
          </Grid>
        </Grid>
      </Container>

      <Container id="contact" maxWidth="lg" className="stackedText">
        <Typography variant="h3" className="sectionHeader">
          Contact
        </Typography>
      </Container>
    </Container>
  );
};

export default Landing;
