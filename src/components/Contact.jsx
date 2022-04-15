import { Typography, Button, TextField } from '@mui/material';

export default function Contact() {
  return (
    <div className='content-section' id='contact'>
      <Typography variant='h2'>Send me an email</Typography>
      <form>
        <TextField label='Subject' type='input' />
        <TextField label='Message' multiline id='email-body' rows='8' />
        <Button variant='contained' id='contact-submit-btn'>
          Send
        </Button>
      </form>
      <Typography variant='h4'>...or connect with me through social</Typography>
      <div id='social-icons'>
        <a
          href='https://www.linkedin.com/in/richardcarrigan'
          target='_blank'
          rel='noreferrer'
        >
          <Button>
            <i className='fab fa-linkedin-in'></i>
          </Button>
        </a>
        <a
          href='https://codepen.io/nihonjinboy85'
          target='_blank'
          rel='noreferrer'
        >
          <Button>
            <i className='fab fa-codepen'></i>
          </Button>
        </a>
        <a
          href='https://github.com/nihonjinboy85'
          target='_blank'
          rel='noreferrer'
        >
          <Button>
            <i className='fab fa-github'></i>
          </Button>
        </a>
      </div>
    </div>
  );
}
