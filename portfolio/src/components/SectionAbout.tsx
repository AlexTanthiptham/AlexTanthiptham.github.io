import { Grid, Container, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

import profile from "../assets/profile.jpg";

const SectionAbout = () => {
  return (
    <StyleWrapper>
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
    </StyleWrapper>
  );
};

export default SectionAbout;
