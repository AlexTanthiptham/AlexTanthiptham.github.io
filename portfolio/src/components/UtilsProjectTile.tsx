import { Style } from "@mui/icons-material";
import StyleWrapper from "./UtilsStyleWrapper";

import { Box, Grid, Container, Typography } from "@mui/material";

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
          }}
        >
          <Typography variant="h4" className="textInika textBold textSecondary">
            {title}
          </Typography>
          <Typography variant="h6" className="textInika textSecondary">
            {description}
          </Typography>
          <Typography variant="body2" className="textInika textSecondary">
            Skills: {tags.join(", ")}
          </Typography>
        </Box>
      </StyleWrapper>
    </Box>
  );
};

export default ProjectTile;
