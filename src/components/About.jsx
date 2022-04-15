import { Typography, Button } from '@mui/material';
import avatarImage from '../assets/avatar.jpg';
import seattleImage from '../assets/seattle.jpg';
import resumeFile from '../assets/richard_carrigan_resume.pdf';

export default function About() {
  return (
    <div className='content-section' id='about'>
      <img src={avatarImage} alt='Avatar' className='avatar' />
      <Typography variant='h2'>About Me</Typography>
      <p>
        I've been working in the Seattle area as the Technical Program Manager
        for the Microsoft Leap Apprenticeship Program since 2020. Prior to that,
        I was the in-house Wordpress Website Administrator at a small
        manufacturing & retail company, with two branded product websites,
        www.triad-orbit.com and www.accessbagsandcases.com.
      </p>
      <img src={seattleImage} alt='Seattle in black and white' id='seattle' />
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
    </div>
  );
}
