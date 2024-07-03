import { Box, Container, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

const SectionExperience = () => {
  return (
    <Container
      id="experience"
      maxWidth="lg"
      sx={{
        ".expContainer": {
          "& > *": {
            py: "0.15rem",
          },
          py: "0.5rem",
        },
      }}
    >
      <StyleWrapper>
        <Typography variant="h3" className="sectionHeader">
          Experience
        </Typography>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Software Engineer
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={1}
            >
              CPSIL at University of Illinois at Urbana-Champaign
            </Typography>
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={0}
            >
              December 2023 - Present
            </Typography>
          </Box>
          <Typography variant="body1" className="textRegular textInika">
            ‣ The Cyberphysical Systems Integration Lab (CPSIL), led by
            Professor Lui Sha and doctoral candidate Simon Yu, is a research
            group dedicated to enhancing the safety and robustness of
            next-generation autonomous vehicles.
            <br />
            ‣ Engineered PyTorch-based ensemble networks to improve traffic sign
            classification accuracy of multitask learning and multi-layer
            perceptron networks by 7.96% and reduce loss of accuracy against
            ImageNet-C attacks by up to 17.83%. <br />
            ‣ Developed robust internal tools for image pre-processing and
            executing adversarial attacks, utilizing PyTorch and OpenCV, to
            improve robustness and streamline testing. <br />‣ Applied
            multiprocessing to streamline experimental processes, reducing
            testing and processing run time by up to 65%.
          </Typography>
        </Box>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Research Assistant
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={1}
            >
              CPSIL at University of Illinois at Urbana-Champaign
            </Typography>
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={0}
            >
              August 2023 - December 2023
            </Typography>
          </Box>
          <Typography variant="body1" className="textRegular textInika">
            ‣ Designed and assembled new IMU PCBs in KiCAD for Biped, a
            two-wheeled self-stabilizing research and educational robot. <br />
            ‣ Executed comprehensive unit testing using oscilloscopes,
            multimeters to validate the functionality of Biped PCBs. <br />-
            Developed procedures to resolve hardware, software and mechanical
            faults, quadrupling the number of functional units.
          </Typography>
        </Box>
        <Box className="expContainer">
          <Typography variant="h5" className="textBold textInika">
            Senior Consultant
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={1}
            >
              FACES Consulting at University of Illinois at Urbana-Champaign
            </Typography>
            <Typography
              variant="h6"
              className="textRegular textInika"
              flexGrow={0}
            >
              January 2023 - August 2023
            </Typography>
          </Box>
          <Typography variant="body1" className="textRegular textInika">
            ‣ Student led business consulting organization with a focus on
            international businesses. <br />
            ‣ Strategized development and launch of a desktop-based business
            suite for a startup’s cloud collaboration app. <br />
            ‣ Conducted customer research and interviews to identify areas of
            improvement, prototyped suggested features using Figma. <br />-
            Coordinated team of 4 consultants, scheduling and coordinating
            project progress using Gantt charts and MS Teams.
          </Typography>
        </Box>
      </StyleWrapper>
    </Container>
  );
};

export default SectionExperience;
