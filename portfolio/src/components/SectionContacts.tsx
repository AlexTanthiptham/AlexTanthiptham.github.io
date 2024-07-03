import React, { useRef } from "react";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Send, Delete } from "@mui/icons-material/";
import emailjs from "@emailjs/browser";

import StyleWrapper from "./StyleWrapper";

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
          }}
        >
          <Typography variant="body1" className="textInika" align="center">
            Let's talk! I'm reachable at jt20@illinois.edu or through the form
            below.
          </Typography>
          <Box
            sx={{
              "& > *": {
                m: 1,
                p: 0.5,
              },
            }}
          >
            <TextField
              label="Your Name"
              name="user_name"
              fullWidth={true}
              className="textInika"
              required={true}
              color="secondary"
            />
            <TextField
              name="user_email"
              label="Your Email Address"
              fullWidth={true}
              className="textInika"
              required={true}
              color="secondary"
            />
            <TextField
              name="message"
              label="Your Message"
              fullWidth={true}
              className="textInika"
              required={true}
              color="secondary"
              multiline
              rows={6}
            />
          </Box>
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Button
              id="contact-submit"
              variant="outlined"
              color="secondary"
              endIcon={<Send />}
              type="submit"
            >
              Submit
            </Button>
            <Button
              id="contact-clear"
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
