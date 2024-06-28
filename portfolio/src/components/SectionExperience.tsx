import { Box, Button, Container, TextField, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

const SectionExperience = () => {
  return (
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
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
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
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
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
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
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
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    </Container>
  );
};

export default SectionExperience;
