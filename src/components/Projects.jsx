import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material';
import ecommerceImage from '../assets/ecommerce_app.jpg';
import weatherImage from '../assets/weather_app.jpg';
import pomodoroImage from '../assets/pomodoro.jpg';

export default function Projects() {
  return (
    <div className='projects'>
      <Card>
        <CardMedia
          component='img'
          image={ecommerceImage}
          alt='Ecommerce app screenshot'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            The MEAN Store
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            An e-commerce application using MongoDB, Express, Angular, and Node
            with a Material Design UI
          </Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component='img'
          image={weatherImage}
          alt='Weather app screenshot'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Richard's Weather
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            A weather app using the Geolocation and Open Weather API's, jQuery,
            and Bootstrap
          </Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component='img'
          image={pomodoroImage}
          alt='Weather app screenshot'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Pomodoro Clock
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            A continuous clock that alternates between the session and break
            using React
          </Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
    </div>
  );
}
