import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ContactPage, Email } from "@mui/icons-material/";

import StyleWrapper from "./UtilsStyleWrapper";

import profile from "../assets/profile.jpg";
import resume from "../assets/doc-resume.pdf";

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
                variant="h1"
                className="fontPrimary textRegular textSecondary"
              >
                Alex Tanthiptham
              </Typography>
              <Typography
                variant="h5"
                className="fontPrimary textRegular textSecondary"
              >
                B.S. Electrical Engineering at UIUC '23
              </Typography>
              <Typography
                variant="body1"
                className="fontPrimary textRegular textSecondary"
              >
                Recent graduate from UIUC. Experience with PCB design, computer
                vision. Interest in computer vision, robotics, autonomous
                systems. Looking for full-time opportunities.
              </Typography>
              <a
                href={resume}
                download="AlexTanthipthamResume.pdf"
                style={{ textDecoration: "none" }}
              >
                <Button
                  id="aboutButtonResume"
                  variant="outlined"
                  color="primary"
                  endIcon={<ContactPage />}
                  type="button"
                  className="fontPrimary textRegular textSecondary"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1vw",
                  }}
                >
                  My Resume
                </Button>
              </a>
              <a
                href="mailto:jt20@illinois.edu"
                style={{ textDecoration: "none" }}
              >
                <Button
                  id="aboutButtonResume"
                  variant="outlined"
                  color="primary"
                  endIcon={<Email />}
                  type="button"
                  className="fontPrimary textRegular textSecondary"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  jt20@illinois.edu
                </Button>
              </a>
            </Grid>
          </Grid>
        </Container>
      </StyleWrapper>
    </Box>
  );
};

export default SectionAbout;
