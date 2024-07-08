import React, { useRef } from "react";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Send, Delete } from "@mui/icons-material/";
import emailjs from "@emailjs/browser";

import StyleWrapper from "./UtilsStyleWrapper";

const SectionContacts = () => {
  // Insert function for sending email here
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "contact_service",
          "template_5qhr88b",
          form.current,
          "H_ylPPVBqXXYxaOOb"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <Container id="contact" maxWidth="lg" className="stackedText">
      <StyleWrapper>
        <Typography variant="h3" className="sectionHeader">
          Contact
        </Typography>
        <Container
          component="form"
          ref={form}
          onSubmit={sendEmail}
          maxWidth="md"
          sx={{
            "& > *": {
              m: 1,
            },
            ".inputField": {
              my: 1,
            },
          }}
        >
          <Typography variant="body1" className="textInika" align="center">
            Let's talk! I'm reachable at jt20@illinois.edu or through the form
            below.
          </Typography>
          <Box id="contactFormWrapper">
            <TextField
              id="contactFormName"
              label="Your Name"
              name="user_name"
              fullWidth={true}
              className="textInika inputField"
              required={true}
              color="secondary"
            />
            <TextField
              id="contactFormEmail"
              name="user_email"
              label="Your Email Address"
              fullWidth={true}
              className="textInika inputField"
              required={true}
              color="secondary"
            />
            <TextField
              id="contactFormMessage"
              name="message"
              label="Your Message"
              fullWidth={true}
              className="textInika inputField"
              required={true}
              color="secondary"
              multiline
              rows={6}
            />
          </Box>
          <Box
            id="contactButtonWrapper"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button
              id="contactButtonSubmit"
              variant="outlined"
              color="secondary"
              endIcon={<Send />}
              type="submit"
            >
              Submit
            </Button>
            <Button
              id="contactButtonClear"
              variant="outlined"
              color="secondary"
              endIcon={<Delete />}
              type="reset"
            >
              Clear
            </Button>
          </Box>
        </Container>
      </StyleWrapper>
    </Container>
  );
};

export default SectionContacts;
