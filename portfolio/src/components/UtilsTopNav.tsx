import "./UtilsTopNav.css";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

/* TODO: 
  - Implement responsive appbar (hamburger menu -> modal for xs screens)
  - Implement dynamically generated nav buttons
    - NOTE: Need to find a way to manage the fact that some links are to sections
      on the same page, while others are to different pages when assigning hrefs
*/

// // WIP CODE
// const pages = ["About", "Projects", "Contact", "Etc."];
//
// {pages.map((page) => (
//   <Button
//     key={page}
//     component={Typography}
//     href={page}
//     variant="text"
//     color="inherit"
//     className="navButton">
//       {page}
//   </Button>
// ))}

const UtilsTopNav = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            color="inherit"
            sx={{
              fontFamily: "Italiana",
              fontWeight: 400,
              textDecoration: "none",
            }}
            flexGrow={1}
          >
            Alex.Tanth
          </Typography>
          <Box
            sx={{
              ".navButton": {
                color: "primary.contrastText",
                borderColor: "primary.main",
                margin: "0px 5px",
                fontFamily: "Italiana",
                fontWeight: 400,
                textDecoration: "none",
              },
              flexGrow: 0,
              alignItems: "center",
              gap: 2,
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Home#experience"
              color="inherit"
              className="navButton"
            >
              Experience
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Home#projects"
              color="inherit"
              className="navButton"
            >
              Projects
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Home#contact"
              color="inherit"
              className="navButton"
            >
              Contact
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/blog"
              color="inherit"
              className="navButton"
            >
              Etc.
            </Typography>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/alex-tanth/"
            >
              <LinkedIn sx={{ color: "primary.contrastText" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/AlexTanthiptham/"
            >
              <GitHub sx={{ color: "primary.contrastText" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UtilsTopNav;
