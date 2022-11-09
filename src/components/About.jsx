import avatarImage from '../assets/avatar.jpg';

export default function About() {
  return (
    <section id='about'>
      <img src={avatarImage} alt='Avatar' className='avatar' />
      <p>
        Hi, I'm Richard, a full-stack developer. I'm currently the Lead
        Technical Program Manager at Microsoft, where I've been building
        technical solutions that help one of their apprenticeship programs,
        Microsoft Leap, achieve its mission of helping talent from
        non-traditional backgrounds find employment in tech. Before getting to
        work with this awesome team, I was responsible for maintaining a couple
        of branded product websites,{' '}
        <a href='https://www.triad-orbit.com' target='_blank' rel='noreferrer'>
          Triad-Orbit Advanced Stand Systems
        </a>{' '}
        and{' '}
        <a
          href='https://www.accessbagsandcases.com'
          target='_blank'
          rel='noreferrer'
        >
          Access Bags and Cases
        </a>
        . While I didn't get to do a ton of development work, debugging UI bugs
        allowed me to dramatically improve my responsive and cross-browser,
        cross-platform design skills.
      </p>
      <p>
        But I wasn't always a developer. In fact, as recently as 2016, I was
        planning to be an accountant after leaving the military and working in
        logistics. While finishing up my Associate's degree in Accounting, I
        needed to fill my credit hours, and a coworker of mine suggested that I
        take a web development course, so I did. It was love at first sight!
        Immediately, I knew that this was what I wanted to do full-time, so I
        sped through 100-level college courses, YouTube tutorials, and the
        FreeCodeCamp curriculum. As with most developers, I started out with
        HTML, CSS, and vanilla JS. After that, I dove into Angular and was even
        able to build a full-stack (MEAN stack to be precise) web app by myself
        (see 'The MEAN Store' project below)!
      </p>
      <p>
        Since then, I've gotten to work with some great tech, such as React,
        GraphQL (client and server), Microsoft Azure, Azure DevOps CI/CD, and
        even the low/no-code Power Platform by Microsoft. Regardless of the tech
        stack, I love having the ability to help people achieve their business
        and personal goals easier. Currently, I'm working on Pers, a personal
        financial management app that lets users add upcoming income and
        expenses, so they can see how they sit financially at any future point
        in time. Feel free to check it out below. It's still a work in progress,
        but I'd love to hear what you think.
      </p>
    </section>
  );
}
