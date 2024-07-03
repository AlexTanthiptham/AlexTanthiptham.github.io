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
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    path: string
  ) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        scrollToElement(targetId);
      }, 0);
    } else {
      scrollToElement(targetId);
    }
  };

  const scrollToElement = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 64; // Adjust based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar position="sticky" color="secondary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home#about"
            color="inherit"
            sx={{
              fontFamily: "Italiana",
              fontWeight: 400,
              textDecoration: "none",
            }}
            flexGrow={1}
            onClick={(e) => handleNavClick(e, "about", "/home")}
          >
            Alex.Tanth
          </Typography>
          <Box
            sx={{
              ".navButton": {
                color: "secondary.contrastText",
                borderColor: "secondary.main",
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
              href="/home#experience"
              color="inherit"
              className="navButton"
              onClick={(e) => handleNavClick(e, "experience", "/home")}
            >
              Experience
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home#projects"
              color="inherit"
              className="navButton"
              onClick={(e) => handleNavClick(e, "projects", "/home")}
            >
              Projects
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home#contact"
              color="inherit"
              className="navButton"
              onClick={(e) => handleNavClick(e, "contact", "/home")}
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
              <LinkedIn sx={{ color: "secondary.contrastText" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/AlexTanthiptham/"
            >
              <GitHub sx={{ color: "secondary.contrastText" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UtilsTopNav;
