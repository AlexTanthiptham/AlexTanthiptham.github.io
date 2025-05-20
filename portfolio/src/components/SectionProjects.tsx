import { Box, Grid, Container, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";

// TODO: Clean up image imports
import projectBiped from "../assets/project-icons/project-biped.png";
import projectGemev from "../assets/project-icons/project-gemev.jpg";
import projectTagAlong from "../assets/project-icons/project-tagalong-alt.png";
import projectVisat from "../assets/project-icons/project-visat.png";
import projectLlamaBear from "../assets/project-icons/project-llamabear.png";
import projectIlliniAlert from "../assets/project-icons/project-illinialert.png";
import React from "react";

const SectionProjects = () => {
  return (
    <Container id="projects" maxWidth="lg" className="textPrimary">
      <StyleWrapper>
        <Typography variant="h3" className="sectionHeader">
          Projects
        </Typography>
        <Typography
          variant="body1"
          className="fontPrimary"
          align="center"
          sx={{ marginBottom: 2 }}
        >
          Selected Projects
        </Typography>
            <ProjectTile
              image={projectTagAlong}
              title={"TagAlong Robot"}
              description={
                [  
                  "User-following cargo carrying robot using a microcontroller for data processing and PID motor control with RaspberryPi for OpenCV tracking of the user in Cython",  
                  "Designed modular main and breakout board PCBs in KiCAD, assembling boards using hand and reflow soldering",  
                  "Engineered power subsystem for 3.3, 5 and 12V outputs from SLA battery using Buck converters and linear regulators",  
                  "Awarded an Honorable Mention award for Spring 2023 Senior Design Project"  
                ]  
              }
              tags={["PCB Design", "Computer Vision", "Circuit Assembly"]}
            />
            <ProjectTile
              image={projectGemev}
              title={"Lane Following for GEM e2"}
              description={  
                [  
                  "Classical computer vision based autonomous lane-following system for a modified GEM e2 Electric Vehicle",  
                  "Developed real-time OpenCV image processing for lane segmentation and center-of-lane path-planning",  
                  "Utilized onboard RGBD stereo camera and GNSS antenna to plot GPS coordinates for use by onboard pure pursuit controller"  
                ]  
              }
              tags={["Python", "Computer Vision", "OpenCV"]}
            />
            <ProjectTile
              image={projectBiped}
              title={"CPSIL - BIPED Project"}
              description={
                [  
                  "Two-wheeled self-balancing robots designed for use by students in CS431 Embedded Systems and as a research platform for CPSIL Visat",  
                  "Designed and assembled new IMU PCBs in KiCAD for Biped, a two-wheeled self-stabilizing research and educational robot",  
                  "Executed comprehensive unit testing using oscilloscopes and multimeters to validate the functionality of Biped PCBs",  
                  "Developed procedures to refurbish faulty hardware, software, and mechanical components, more than quadrupling the number of functional Biped units"  
                ]                
              }
              tags={["PCB Design", "Circuit Assembly"]}
            />
            <ProjectTile
              image={projectVisat}
              title={"CPSIL - VISAT Project"}
              description={
                [  
                  "Research group aimed at improving safety and robustness of next-generation autonomous vehicles under Professor Lui Sha",  
                  "Implemented a PyTorch framework to evaluate the robustness of multitask learning and multi-layer perceptron networks to improve the safety of next-generation autonomous vehicles, increasing traffic sign classification accuracy by 7.96% and reducing loss of accuracy against ImageNet-C attacks by up to 17.83%",  
                  "Applied sum-product network algorithm to improve classification accuracy of traffic signs affected by ImageNet-C corruptions and color quantization distribution shift",  
                  "Engineered adversarial and distribution shift attacks using PyTorch and OpenCV to evaluate and improve robustness of vision pipelines",  
                  "Applied multiprocessing to streamline experimental processes, reducing testing and processing run time by up to 65%"  
                ]  
                            
              }
              tags={["Python, Pytorch, OpenCV"]}
            />
            <ProjectTile
              image={projectLlamaBear}
              title={"Resume Review WebApp"}
              description={
                [  
                  "MERN (MongoDB, Express JS, React, Node JS) stack web app that allows users to upload their resumes, tag them by fields, and receive as well as give anonymous reviews from other users and experts",  
                  "Engineered a MongoDB backend and RESTful API using Express, Node JS, and Vercel to parse, store, retrieve, and display PDF files via Multer, and integrated with Firebase for user authentication and user data",  
                  "Designed an interactive UI/UX prototype using Figma to gauge user feedback and iterate on design"  
                ]                              
              }
              tags={["React, Node.js, Express, MongoDB, Firebase, Figma"]}
            />
            <ProjectTile
              image={projectIlliniAlert}
              title={"IlliniAlert App"}
              description={
                [  
                  "Java-based Android app using Android Studio to enhance public safety through tracking of local emergencies",  
                  "Visualized local emergencies identified from parsed SMS and email messages relative to user location using Google Map API",  
                  "Conducted extensive user research, including over 24 interviews with targeted users at multiple stages of development, from initial user research and Figma UI prototype to functional prototype"  
                ]  
              }
              tags={["Android Studio, Java, Google Maps API, Figma"]}
            />
      </StyleWrapper>
    </Container>
  );
};

export default SectionProjects;

// [Helper] ProjectTile.tsx
interface ProjectTileProps {
  image: string; // Imported images are strings of the filepath
  title: string;
  description: string[];
  tags: string[];
}


const ProjectTile: React.FC<ProjectTileProps> = ({
  image,
  title,
  description,
  tags,
}) => {
  return (
    <Box display="flex" flexDirection="row" id="projectContainer"
          sx={{
            "& > *": {
              px: "1rem"
            },
            py: "0.5rem",
          }}
    >
      <Box
        id="projectImage"
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "25%",
        }}
      />
      <Box id="projectText"
          sx={{
            "& > *": {
              py: "0.15rem"
            },
          }}
      >
        <Typography variant="h5" className="textBold fontPrimary">
          {title}
        </Typography>
        <Typography variant="body1" className="textRegular fontPrimary">
          {description.map((item, index) => (
            <React.Fragment key={index}>
              {"‣ "} {item}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
        <Typography variant="body2" className="textRegular fontPrimary">
            {"Relevant Skills: "}
            {tags.join(", ")}
        </Typography>
      </Box>
    </Box>
  );
};


// LEGACY


// const ProjectTile: React.FC<ProjectTileProps> = ({
//   image,
//   title,
//   description,
//   tags,
// }) => {
//   return (

//     <Box
//       id="projectContainer"
//       sx={{
//         "& > *": {
//           py: "0.15rem",
//         },
//         py: "0.5rem",
//         overflow: "hidden",
//       }}
//     >
//       <StyleWrapper>
//         <Box
//           id="projectImage"
//           component="img"
//           src={image}
//           alt={title}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "0%",
//             width: "25%",
//             height: "100%",
//             objectFit: "contain",
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//         <Box
//           id="projectHoverSection"
//           sx={{
//             position: "absolute",
//             top: 0,
//             height: "100%",
//             width: "75%",
//             textWrap: "wrap",
//           }}
//         >
//           <Typography
//             variant="h4"
//             className="fontPrimary textBold textSecondary"
//           >
//             {title}
//           </Typography>
//           <Typography variant="h6" className="fontPrimary textSecondary">
//             {description}
//           </Typography>
//           <Typography
//             variant="body2"
//             className="fontPrimary textSecondary textUnderline textBold"
//           >
//             Tags:
//           </Typography>
//           <Typography variant="body2" className="fontPrimary textSecondary">
//             {tags.join(", ")}
//           </Typography>
//         </Box>
//       </StyleWrapper>
//     </Box>
//   );
// };
