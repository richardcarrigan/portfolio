import { Typography, Button, TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <section id='contact'>
      <Typography variant='h2'>Contact me</Typography>
      <form name='contact' method='POST' netlify>
        <input type='hidden' name='form-name' value='contact' />
        <TextField label='Name' name='name' type='text' required />
        <TextField label='Email' name='email' type='email' required />
        <TextField
          label='Message'
          name='message'
          multiline
          id='email-body'
          rows='8'
          required
        />
        <Button variant='contained' id='contact-submit-btn' type='submit'>
          Send
        </Button>
      </form>
      <Typography variant='h4'>...or connect with me through social</Typography>
      <div class='social'>
        <a
          href='https://twitter.com/Rich_Carrigan'
          target='_blank'
          rel='noreferrer'
        >
          <Button aria-label='Twitter'>
            <TwitterIcon fontSize='large' />
          </Button>
        </a>
        <a
          href='https://www.linkedin.com/in/richardcarrigan'
          target='_blank'
          rel='noreferrer'
        >
          <Button aria-label='LinkedIn'>
            <LinkedInIcon fontSize='large' />
          </Button>
        </a>
        <a
          href='https://github.com/nihonjinboy85'
          target='_blank'
          rel='noreferrer'
        >
          <Button aria-label='Github'>
            <GitHubIcon fontSize='large' />
          </Button>
        </a>
      </div>
    </section>
  );
}
