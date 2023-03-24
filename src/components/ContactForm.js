import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5b8por", // serviceID
        "template_w6c1mkf", // templateID
        form.current,
        "hhQLz-RC-slS4I4QN" // userID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextField label="Name" name="user_name" type="text">
        Name
      </TextField>
      <TextField label="Email" name="user_email" type="email">
        Email
      </TextField>
      <TextField label="Message" name="message" type="text">
        Message
      </TextField>
      <Button type="submit" color="primary" variant="contained" sx={{ m: 2 }}>
        Send
      </Button>
      {/* <input type="submit" value="Send" /> */}
    </form>
  );
};
