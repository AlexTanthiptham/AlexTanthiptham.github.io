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
    <StyleWrapper>
      <Container id="contact" maxWidth="lg" className="stackedText">
        <Container
          component="form"
          ref={form}
          onSubmit={sendEmail}
          maxWidth="md"
          sx={{
            "& > *": {
              py: 3,
            },
          }}
        >
          <Typography variant="h3" className="sectionHeader">
            Contact
          </Typography>
          <Typography variant="body1" className="textInika" align="center">
            Let's talk! I'm reachable at jt20@illinois.edu or through the form
            below
          </Typography>
          <TextField
            label="Your Name"
            name="user_name"
            variant="outlined"
            fullWidth={true}
            className="textInika"
            required={true}
          />
          <TextField
            name="user_email"
            label="Your Email Address"
            variant="outlined"
            fullWidth={true}
            className="textInika"
            required={true}
          />
          <TextField
            name="message"
            label="Your Message"
            variant="outlined"
            fullWidth={true}
            className="textInika"
            required={true}
          />
          <Container
            sx={{
              alignItems: "center",
              "& > *": {
                mx: 3,
              },
            }}
          >
            <Button
              id="contact-submit"
              variant="contained"
              endIcon={<Send />}
              type="submit"
            >
              Submit
            </Button>
            <Button
              id="contact-clear"
              variant="contained"
              endIcon={<Delete />}
              type="reset"
            >
              Clear
            </Button>
          </Container>
        </Container>
      </Container>
    </StyleWrapper>
  );
};

export default SectionContacts;
