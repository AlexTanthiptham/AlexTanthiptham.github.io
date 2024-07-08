import { Box, Grid, Container, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";
import ProjectTile from "./UtilsProjectTile";

// TODO: Clean up image imports
import projectBiped from "../assets/project-icons/project-biped.png";
import projectGemev from "../assets/project-icons/project-gemev.jpg";
import projectTagAlong from "../assets/project-icons/project-tagalong.png";
import projectVisat from "../assets/project-icons/project-visat.png";

const SectionProjects = () => {
  return (
    <Container id="projects" maxWidth="lg" className="textPrimary">
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
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectTile
              image={projectBiped}
              title={"CPSIL - BIPED"}
              description={
                "Two wheeled self-balancing robots for CS431 Embedded Systems and as a research platform for CPSIL Visat "
              }
              tags={["Python"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectTile
              image={projectGemev}
              title={"Lane Following for GEM e2"}
              description={"Lane following for GEM e2 electric vehicle"}
              tags={["Python, OpenCV"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectTile
              image={projectTagAlong}
              title={"TagAlong Robot"}
              description={
                "User-following personal assistant for disabled users"
              }
              tags={["PCB Design"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectTile
              image={projectVisat}
              title={"CPSIL - VISAT"}
              description={
                "User-following personal assistant for disabled users"
              }
              tags={["Python, Pytorch, OpenCV"]}
            />
          </Grid>
        </Grid>
      </StyleWrapper>
    </Container>
  );
};

export default SectionProjects;
