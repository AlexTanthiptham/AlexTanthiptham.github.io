import {
  AppBar,
  Backdrop,
  Box,
  Container,
  Fade,
  Modal,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Close, GitHub, LinkedIn, Menu } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
/* TODO: 
  - Implement responsive appbar (hamburger menu -> modal for xs screens) --> SEE PLACEHOLDERS
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
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

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

  const NavBarDesktop = () => {
    return (
      <Box
        id="navbarDesktopLinks"
        sx={{
          flexGrow: { xs: 1, sm: 0 },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 2,
          display: { xs: "none", sm: "flex" },
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
          sx={{ display: { xs: "none", sm: "none" } }} // NOTE: This is a stop gap until I implement the page
        >
          Etc.
        </Typography>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/alex-tanth/"
        >
          <LinkedIn sx={{ color: "secondary.contrastText" }} />
        </IconButton>
        <IconButton component="a" href="https://github.com/AlexTanthiptham/">
          <GitHub sx={{ color: "secondary.contrastText" }} />
        </IconButton>
      </Box>
    );
  };

  const NavBarMobile = () => {
    return (
      <Box>
        <IconButton
          id="navbarMobileMenuOpen"
          component="a"
          onClick={handleModalOpen}
          sx={{
            display: { xs: "block", sm: "none" },
            color: "secondary.contrastText",
            flexGrow: 0,
            alignItems: "center",
          }}
        >
          <Menu />
        </IconButton>
        <Modal open={modalOpen} onClose={handleModalClose} closeAfterTransition>
          <Fade in={modalOpen}>
            <Container
              id="navbarMobileModal"
              sx={{
                height: "100%",
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                position: "absolute" as "absolute",
                width: "100%",
                boxShadow: 24,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: 0.5,
                display: "flex",
              }}
            >
              <Box>
                <IconButton
                  id="navbarMobileMenuOClose"
                  component="a"
                  onClick={handleModalClose}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    color: "secondary.contrastText",
                    flexGrow: 0,
                    alignItems: "center",
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home#projects"
                color="inherit"
                className="navButton"
                onClick={(e) => handleNavClick(e, "projects", "/home")}
              >
                MOBILE NAV BUTTON 1
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
                MOBILE NAV BUTTON 2
              </Typography>
            </Container>
          </Fade>
        </Modal>
      </Box>
    );
  };

  return (
    <AppBar position="sticky" color="secondary" elevation={0}>
      <Container id="navbarWrapper" maxWidth="xl" sx={{ overflow: "hidden" }}>
        <Toolbar disableGutters>
          <Typography
            id="navbarTitle"
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
            id="navbarLinks"
            sx={{
              ".navButton": {
                color: "secondary.contrastText",
                borderColor: "secondary.main",
                margin: "0px 5px",
                fontFamily: "Italiana",
                fontWeight: 400,
                textDecoration: "none",
              },
            }}
          >
            <NavBarMobile />
            <NavBarDesktop />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UtilsTopNav;
