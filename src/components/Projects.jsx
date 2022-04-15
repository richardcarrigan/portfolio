import { Card, Typography, Button } from '@mui/material';

export default function Projects() {
  return (
    <div className='projects'>
      <Card>
        <div className='mdc-card__primary-action' tabindex='0'>
          <div
            id='ecommerce_image'
            className='mdc-card__media mdc-card__media--square'
          ></div>
          <div>
            <Typography variant='h6'>The MEAN Store</Typography>
          </div>
          <Typography variant='body2'>
            <p>
              An e-commerce application using MongoDB, Express, Angular, and
              Node with a Material Design UI
            </p>
          </Typography>
        </div>
        <div className='mdc-card__actions'>
          <a href='https://the-mean-store.herokuapp.com'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Demo
            </Button>
          </a>
          <a href='https://github.com/nihonjinboy85/ecommerce-mean-app'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Source
            </Button>
          </a>
        </div>
      </Card>
      <Card>
        <div className='mdc-card__primary-action' tabindex='0'>
          <div
            id='weather_image'
            className='mdc-card__media mdc-card__media--square'
          ></div>
          <div>
            <Typography variant='h6'>Richard's Weather</Typography>
          </div>
          <Typography variant='body2'>
            <p>
              A weather app using the Geolocation and Open Weather API's,
              jQuery, and Bootstrap
            </p>
          </Typography>
        </div>
        <div className='mdc-card__actions'>
          <a href='https://codepen.io/nihonjinboy85/full/LRWwxg'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Demo
            </Button>
          </a>
          <a href='https://codepen.io/nihonjinboy85/pen/LRWwxg'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Source
            </Button>
          </a>
        </div>
      </Card>
      <Card>
        <div className='mdc-card__primary-action' tabindex='0'>
          <div
            id='pomodoro_image'
            className='mdc-card__media mdc-card__media--square'
          ></div>
          <div>
            <Typography variant='h6'>Pomodoro Clock</Typography>
          </div>
          <Typography variant='body2'>
            <p>
              A continuous clock that alternates between the session and break
              using React
            </p>
          </Typography>
        </div>
        <div className='mdc-card__actions'>
          <a href='https://codepen.io/nihonjinboy85/full/aeJzoV'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Demo
            </Button>
          </a>
          <a href='https://codepen.io/nihonjinboy85/pen/aeJzoV'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Source
            </Button>
          </a>
        </div>
      </Card>
    </div>
  );
}
