import { Box, Grid, Container, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

// TODO: Clean up image imports
import projectBiped from "../assets/project-icons/project-biped.png";
import projectGemev from "../assets/project-icons/project-gemev.jpg";
import projectTagAlong from "../assets/project-icons/project-tagalong.png";
import projectVisat from "../assets/project-icons/project-visat.png";

const SectionProjects = () => {
  return (
    <Container id="projects" maxWidth="lg">
      <StyleWrapper>
        <Typography variant="h3" className="sectionHeader">
          Projects
        </Typography>
        <Typography
          variant="body1"
          className="textInika"
          align="center"
          sx={{ marginBottom: 2 }}
        >
          Note: This section is a work in progress. In the near future, project
          tiles will be clickable to display more information.
        </Typography>
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
            <Box className="projectContainer">
              <Box
                component="img"
                src={projectGemev}
                alt={"GemEV"}
                className="projectImage"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="projectContainer">
              <Box
                component="img"
                src={projectTagAlong}
                alt={"GemEV"}
                className="projectImage"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="projectContainer">
              <Box
                component="img"
                src={projectVisat}
                alt={"GemEV"}
                className="projectImage"
              />
            </Box>
          </Grid>
        </Grid>
      </StyleWrapper>
    </Container>
  );
};

export default SectionProjects;
