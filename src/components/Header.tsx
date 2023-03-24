import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
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

const drawerWidth = 256;
const navItems = ['About', 'Work', 'Contact'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Richard Carrigan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              href={`#${item.toLowerCase()}`}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="social">
        <Button
          href="https://twitter.com/Rich_Carrigan"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </Button>
        <Button
          href="https://www.linkedin.com/in/richardcarrigan"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </Button>
        <Button
          href="https://github.com/richardcarrigan"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <GitHubIcon />
        </Button>
        <Button
          href="https://blog.richardcarrigan.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Blog"
        >
          <BookIcon />
        </Button>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: { md: 'flex' },
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', width: { md: '33%' } }}
          >
            Richard Carrigan
          </Typography>
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              width: '33%'
            }}
          >
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  href={`#${item.toLowerCase()}`}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '33%',
              justifyContent: 'flex-end'
            }}
          >
            <ListItem sx={{ flexBasis: 0 }} disablePadding>
              <ListItemButton
                href="https://twitter.com/Rich_Carrigan"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ flexBasis: 0 }} disablePadding>
              <ListItemButton
                href="https://www.linkedin.com/in/richardcarrigan"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ flexBasis: 0 }} disablePadding>
              <ListItemButton
                href="https://github.com/richardcarrigan"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <GitHubIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ flexBasis: 0 }} disablePadding>
              <ListItemButton
                href="https://blog.richardcarrigan.dev"
                target="_blank"
                rel="noreferrer"
                aria-label="Blog"
              >
                <BookIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
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
