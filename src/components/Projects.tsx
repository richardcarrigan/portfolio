import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material';

export default function Projects() {
  return (
    <div className='projects'>
      <Card>
        <CardMedia
          component='iframe'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/x6m4_7nddz4'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Pers
          </Typography>
          <p>
            A financial app I'm currently building so I can track forecasted
            income and expenses, allowing me to see exactly how much money I'll
            have on any given date. Uses React, Apollo GraphQL (client and
            server), Node.js, and MongoDB.
          </p>
        </CardContent>
        <CardActions>
          <a href='https://github.com/richardcarrigan/pers'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Source
            </Button>
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component='iframe'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/o1Mbk7e-F90'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            The MEAN Store
          </Typography>
          <p>
            An e-commerce application using MongoDB, Express, Angular, and Node
            with a Material Design UI
          </p>
        </CardContent>
        <CardActions>
          <a href='https://the-mean-store.herokuapp.com'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Demo
            </Button>
          </a>
          <a href='https://github.com/richardcarrigan/ecommerce-mean-app'>
            <Button className='mdc-card__action mdc-card__action--button'>
              Source
            </Button>
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component='iframe'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/l8f5VuLc2XE'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Richard's Weather
          </Typography>
          <p>
            A weather app using the Geolocation and Open Weather API's, jQuery,
            and Bootstrap
          </p>
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
    </div>
  );
}
