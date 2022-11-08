import { Button } from '@mui/material';
import resumeFile from '../assets/richard_carrigan_software_developer_resume.pdf';
import avatarImage from '../assets/avatar.jpg';

export default function About() {
  return (
    <section id='about'>
      <img src={avatarImage} alt='Avatar' className='avatar' />
      <p>
        Hi, I'm Richard. I've been working in the Seattle area as the Technical
        Program Manager for Microsoft Leap since 2020. Prior to that, I was the
        in-house Wordpress Website Administrator at a small manufacturing &
        retail company, with two branded product websites,
        <a href='https://www.triad-orbit.com'>
          Triad-Orbit Advanced Stand Systems
        </a>{' '}
        and{' '}
        <a href='https://www.accessbagsandcases.com'>Access Bags and Cases</a>.
      </p>
      <p>
        Most recently, I have been developing single-page web applications using
        React, Material UI, and GraphQL. I've also been getting really into
        DevOps and Azure Cloud administration and development. I'm also skilled
        in a wide range of web technologies from HTML, CSS, and JavaScript as
        well as various other tools such as TypeScript, SASS, Node.js, Express,
        SQL, and MongoDB.
      </p>
      <a href={resumeFile} target='_blank' rel='noreferrer'>
        <Button variant='contained' id='resume-btn'>
          View Resume
        </Button>
      </a>
    </section>
  );
}
