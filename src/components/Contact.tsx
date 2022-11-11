import { Typography, Button, TextField } from '@mui/material';

export default function Contact() {
  return (
    <section id="contact">
      <Typography variant="h2">Contact me</Typography>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <TextField label="Name" name="name" type="text" required />
        <TextField label="Email" name="email" type="email" required />
        <TextField
          label="Message"
          name="message"
          multiline
          id="email-body"
          rows="8"
          required
        />
        <Button variant="contained" id="contact-submit-btn" type="submit">
          Send
        </Button>
      </form>
    </section>
  );
}
