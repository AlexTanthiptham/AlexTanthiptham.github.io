import { Box, Container, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";
import React from "react";

const SectionExperience = () => {
  return (
    <Container id="experience" maxWidth="lg">
      <StyleWrapper>
        <Typography variant="h3" className="sectionHeader">
          Experience
        </Typography>
        <ExperienceContainer
          title="Software Engineer"
          location="CPSIL at University of Illinois at Urbana-Champaign"
          date="December 2023 - Present"
          description={[
            "The Cyberphysical Systems Integration Lab (CPSIL), led by Professor Lui Sha and doctoral candidate Simon Yu, is a research group dedicated to enhancing the safety and robustness of next-generation autonomous vehicles.",
            "Engineered PyTorch-based ensemble networks to improve traffic sign classification accuracy of multitask learning and multi-layer perceptron networks by 7.96% and reduce loss of accuracy against ImageNet-C attacks by up to 17.83%.",
            "Developed robust internal tools for image pre-processing and executing adversarial attacks, utilizing PyTorch and OpenCV, to improve robustness and streamline testing.",
            "Applied multiprocessing to streamline experimental processes, reducing testing and processing run time by up to 65%.",
          ]}
        />
        <ExperienceContainer
          title="Research Assistant"
          location="University of Illinois at Urbana-Champaign"
          date="August 2023 - December 2023"
          description={[
            "Designed and assembled new IMU PCBs in KiCAD for Biped, a two-wheeled self-stabilizing research and educational robot.",
            "Executed comprehensive unit testing using oscilloscopes, multimeters to validate the functionality of Biped PCBs.",
            "Developed procedures to resolve hardware, software and mechanical faults, quadrupling the number of functional units.",
          ]}
        />
        <ExperienceContainer
          title="Data Structures Course Assistant"
          location="Department of Computer Science at University of Illinois at Urbana-Champaign"
          date="August 2022 - December 2023"
          description={[
            "Successfully trained students in a course of over 705 students in both classroom and individual settings on advanced programming concepts, including data structures, C++, Git, Docker and debugging techniques (Valgrind, GDB)",
            "Fostered a collaborative, inclusive and supportive learning atmosphere by engaging with students to build rapport and resolve both academic and personal concerns",
          ]}
        />
        <ExperienceContainer
          title="Senior Consultant"
          location="FACES Consulting at University of Illinois at Urbana-Champaign"
          date="January 2023 - August 2023"
          description={[
            "Student led business consulting organization with a focus on international businesses.",
            "Strategized development and launch of a desktop-based business suite for a startup’s cloud collaboration app.",
            "Conducted customer research and interviews to identify areas of improvement, prototyped suggested features using Figma.",
            "Coordinated team of 4 consultants, scheduling and coordinating project progress using Gantt charts and MS Teams.",
          ]}
        />
      </StyleWrapper>
    </Container>
  );
};

export default SectionExperience;

// [Helper] ExperienceContainer.tsx
interface ExperienceContainerProps {
  title: string;
  location: string;
  date: string;
  description: string[]; // Takes bulletpoints
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  title,
  location,
  date,
  description,
}) => {
  return (
    <Box
      id="experienceContainer"
      sx={{
        "& > *": {
          py: "0.15rem",
        },
        py: "0.5rem",
      }}
    >
      <Typography variant="h5" className="textBold textInika">
        {title}
      </Typography>
      <Box display="flex" flexDirection="row">
        <Typography variant="h6" className="textRegular textInika" flexGrow={1}>
          {location}
        </Typography>
        <Typography variant="h6" className="textRegular textInika" flexGrow={0}>
          {date}
        </Typography>
      </Box>
      <Typography variant="body1" className="textRegular textInika">
        {description.map((item, index) => (
          <React.Fragment key={index}>
            {"‣ "} {item}
            {index < description.length - 1 && <br />}
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};
