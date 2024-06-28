import { Box, Button, Container, TextField, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

const SectionContacts = () => {
  return (
    <StyleWrapper>
      <Container id="contact" maxWidth="lg" className="stackedText">
        <Typography variant="h3" className="sectionHeader">
          Contact
        </Typography>
        <Typography variant="body1" className="sectionHeader" align="center">
          Let's talk! I'm reachable at jt20@illinois.edu or through the form
          below
        </Typography>
        <TextField id="contact-name" label="Name" variant="outlined" />
        <TextField id="contact-email" label="Email" variant="outlined" />
        <TextField id="contact-send" label="Message" variant="outlined" />
        <Button id="contact-submit" variant="contained">
          {" "}
          Submit{" "}
        </Button>
      </Container>
    </StyleWrapper>
  );
};

export default SectionContacts;
