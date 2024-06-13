import React from "react";
import "./Landing.css";
import { AppBar, Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import profile from "../assets/profile.jpg";
const Landing = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container className="introSection" maxWidth="md">
        <Grid container spacing={4} sx={{ "& > *": { padding: "1vw" } }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "100%",
                }}
                src={profile}
                alt="Profile"
              />
            </Box>{" "}
          </Grid>
          <Grid item xs={12} sm={8}>
            <h2>Hi I'm</h2>
            <h1>Alex</h1>
            <h3>B.S. Electrical Engineering at UIUC '23</h3>
            <Box>
              Recent graduate from UIUC. Experience with PCB design, computer
              vision. Interest in computer vision, robotics, autonomous systems
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="warning">
              Secondary
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
