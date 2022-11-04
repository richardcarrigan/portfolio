import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

const drawerWidth = 240;
const navItems = ['Work', 'Contact'];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Richard <span id='last-name'>Carrigan</span>
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button href={`#${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div class='social'>
        <Link
          href='https://twitter.com/Rich_Carrigan'
          target='_blank'
          rel='noreferrer'
          aria-label='Twitter'
        >
          <TwitterIcon />
        </Link>
        <Link
          href='https://www.linkedin.com/in/richardcarrigan'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <LinkedInIcon />
        </Link>
        <Link
          href='https://github.com/richardcarrigan'
          target='_blank'
          rel='noreferrer'
          aria-label='Github'
        >
          <GitHubIcon />
        </Link>
        <Link
          href='https://blog.richardcarrigan.dev'
          target='_blank'
          rel='noreferrer'
          aria-label='Blog'
        >
          <BookIcon />
        </Link>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar
          sx={{ display: { md: 'flex' }, justifyContent: 'space-between' }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Richard <span id='last-name'>Carrigan</span>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '33%',
              justifyContent: 'center'
            }}
          >
            {navItems.map(item => (
              <Button
                href={
                  item.toLowerCase() === 'blog'
                    ? `https://blog.richardcarrigan.dev`
                    : `#${item.toLowerCase()}`
                }
                key={item}
                sx={{ color: '#fff' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '33%',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              sx={{ color: '#fff' }}
              href='https://twitter.com/Rich_Carrigan'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <TwitterIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href='https://www.linkedin.com/in/richardcarrigan'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <LinkedInIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href='https://github.com/richardcarrigan'
              target='_blank'
              rel='noreferrer'
              aria-label='Github'
            >
              <GitHubIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href='https://blog.richardcarrigan.dev'
              target='_blank'
              rel='noreferrer'
              aria-label='Blog'
            >
              <BookIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
