import { Box, Container, Grid, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";

import profile from "../assets/profile.jpg";

const SectionAbout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "primary.contrastText",
      }}
    >
      <StyleWrapper>
        <Container
          id="about"
          maxWidth="lg"
          sx={{
            height: {
              xs: "auto", // No set height for sizes smaller than xs
              sm: "90vh", // height=100vh (10vh padding included in Landing.tsx for all sections) for screen sizes larger than sm
            },
          }}
        >
          <Grid container spacing={5}>
            <Grid
              id="aboutImage"
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
              <Box
                component="img"
                src={profile}
                alt="Profile"
                sx={{
                  width: "90%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "100%",
                  border: "1rem solid",
                  borderColor: "secondary.contrastText", // Using theme value
                }}
              />
            </Grid>
            <Grid
              id="aboutText"
              item
              xs={12}
              sm={7}
              className="stackedText"
              sx={{ paddingBottom: "2vh" }}
            >
              <Typography
                variant="h3"
                className="textItaliana textRegular textSecondary"
                color="secondary"
              >
                Hi I'm
              </Typography>
              <Typography
                variant="h1"
                className="textItaliana textRegular textSecondary"
              >
                Alex
              </Typography>
              <Typography
                variant="h5"
                className="textInika textRegular textSecondary"
              >
                B.S. Electrical Engineering at UIUC '23
              </Typography>
              <Typography
                variant="body1"
                className="textInika textRegular textSecondary"
              >
                Recent graduate from UIUC. Experience with PCB design, computer
                vision. Interest in computer vision, robotics, autonomous
                systems. Looking for full-time opportunities.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyleWrapper>
    </Box>
  );
};

export default SectionAbout;
