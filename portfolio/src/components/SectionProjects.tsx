import { Box, Grid, Container, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";

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
              image={projectGemev}
              title={"Lane Following for GEM e2"}
              description={"Lane following for GEM e2 electric vehicle"}
              tags={["Python, OpenCV"]}
            />
          </Grid>
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
              image={projectVisat}
              title={"CPSIL - VISAT"}
              description={
                "User-following personal assistant for disabled users"
              }
              tags={["Python, Pytorch, OpenCV"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectTile
              image={projectVisat}
              title={"LlamaBear"}
              description={
                "MERN stack web app for reviewing and improving resumes"
              }
              tags={["React, Node.js, Express, MongoDB, Firebase"]}
            />
          </Grid>
        </Grid>
      </StyleWrapper>
    </Container>
  );
};

export default SectionProjects;

// [Helper] ProjectTile.tsx
interface ProjectTileProps {
  image: string; // Imported images are strings of the filepath
  title: string;
  description: string;
  tags: string[];
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  image,
  title,
  description,
  tags,
}) => {
  return (
    <Box
      id="projectContainer"
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100%", // 1:1 aspect ratio
        overflow: "hidden",
      }}
    >
      <StyleWrapper>
        <Box
          id="projectImage"
          component="img"
          src={image}
          alt={title}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Box
          id="projectHoverSection"
          sx={{
            position: "absolute",
            top: 0,
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            width: "100%",
            height: "100%",
            opacity: 0,
            padding: "5%",
            transition: "opacity 0.3s",
            "&:hover": {
              opacity: 1,
            },
            textWrap: "wrap",
          }}
        >
          <Typography variant="h4" className="textInika textBold textSecondary">
            {title}
          </Typography>
          <Typography variant="h6" className="textInika textSecondary">
            {description}
          </Typography>
          <Typography
            variant="body2"
            className="textInika textSecondary textUnderline textBold"
          >
            Tags:
          </Typography>
          <Typography variant="body2" className="textInika textSecondary">
            {tags.join(", ")}
          </Typography>
        </Box>
      </StyleWrapper>
    </Box>
  );
};
