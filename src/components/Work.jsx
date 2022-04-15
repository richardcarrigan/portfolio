import { Typography } from '@mui/material';
import Projects from './Projects';

export default function Work() {
  return (
    <div className='content-section' id='work'>
      <Typography variant='h2'>My Work</Typography>

      <div className='iframe-container'>
        <iframe
          title='FCC D3 Choropleth Map'
          src='https://codepen.io/nihonjinboy85/embed/WNvMYEM?height=265&theme-id=dark&default-tab=result'
          frameborder='no'
          allowtransparency='true'
          allowfullscreen='true'
        >
          See the Pen{' '}
          <a href='https://codepen.io/nihonjinboy85/pen/WNvMYEM'>
            FCC D3 Choropleth Map
          </a>{' '}
          by Richard Carrigan (
          <a href='https://codepen.io/nihonjinboy85'>@nihonjinboy85</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>

      <Projects />
    </div>
  );
}
