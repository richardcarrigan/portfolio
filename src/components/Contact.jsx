import { Typography, Button, TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const submitForm = e => {
  e.preventDefault();
  e.target.style.visibility = 'hidden';
  e.target.previousSibling.innerHTML = 'Thanks!';
  e.target.reset();

  setTimeout(() => {
    e.target.style.visibility = 'visible';
    e.target.previousSibling.innerHTML = 'Contact me';
  }, 1000);
};

export default function Contact() {
  return (
    <section id='contact'>
      <Typography variant='h2'>Contact me</Typography>
      <form name='contact' data-netlify='true' onSubmit={submitForm}>
        <TextField label='Email' type='email' required />
        <TextField
          label='Message'
          multiline
          id='email-body'
          rows='8'
          required
        />
        <Button variant='contained' id='contact-submit-btn' type='Submit'>
          Send
        </Button>
      </form>
      <Typography variant='h4'>...or connect with me through social</Typography>
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
    </section>
  );
}
