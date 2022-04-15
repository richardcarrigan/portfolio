import { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';

export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List component='nav'>
        <ListItemButton
          component='a'
          href='#about'
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemText primary='About' />
        </ListItemButton>
        <ListItemButton
          component='a'
          href='#work'
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemText primary='Work' />
        </ListItemButton>
        <ListItemButton
          component='a'
          href='#contact'
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary='Contact' />
        </ListItemButton>
      </List>
      <Drawer>
        <div className='mdc-drawer__header'>
          <h3 className='mdc-drawer__title'>Richard Carrigan</h3>
        </div>
        <aside className='mdc-drawer mdc-drawer--modal'>
          <div className='mdc-drawer__content'></div>
        </aside>
        <div className='mdc-drawer-scrim'></div>
        <div class='mdc-drawer-app-content'>
          <header class='mdc-top-app-bar mdc-top-app-bar--dense' id='navbar'>
            <div class='mdc-top-app-bar__row'>
              <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
                <button class='material-icons mdc-top-app-bar__navigation-icon mdc-icon-button'>
                  menu
                </button>
                <button class='mdc-button mdc-top-app-bar__title'>
                  <a href='#main-content'>
                    <span class='mdc-button__label'>
                      Richard<span id='last-name'>Carrigan</span>
                    </span>
                  </a>
                </button>
              </section>
              <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
                <div class='mdc-tab-bar' role='tablist'>
                  <div class='mdc-tab-scroller'>
                    <div class='mdc-tab-scroller__scroll-area'>
                      <div class='mdc-tab-scroller__scroll-content'>
                        <a href='#about'>
                          <button class='mdc-tab' id='about-tab'>
                            <span class='mdc-tab__content'>
                              <span class='mdc-tab__text-label'>About</span>
                            </span>
                            <span
                              class='mdc-tab-indicator'
                              id='about-tab-indicator'
                            >
                              <span class='mdc-tab-indicator__content mdc-tab-indicator__content--underline'></span>
                            </span>
                            <span class='mdc-tab__ripple'></span>
                          </button>
                        </a>
                        <a href='#work'>
                          <button class='mdc-tab' id='work-tab'>
                            <span class='mdc-tab__content'>
                              <span class='mdc-tab__text-label'>Work</span>
                            </span>
                            <span
                              class='mdc-tab-indicator'
                              id='work-tab-indicator'
                            >
                              <span class='mdc-tab-indicator__content mdc-tab-indicator__content--underline'></span>
                            </span>
                            <span class='mdc-tab__ripple'></span>
                          </button>
                        </a>
                        <a href='#contact'>
                          <button class='mdc-tab' id='contact-tab'>
                            <span class='mdc-tab__content'>
                              <span class='mdc-tab__text-label'>Contact</span>
                            </span>
                            <span
                              class='mdc-tab-indicator'
                              id='contact-tab-indicator'
                            >
                              <span class='mdc-tab-indicator__content mdc-tab-indicator__content--underline'></span>
                            </span>
                            <span class='mdc-tab__ripple'></span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </header>
        </div>
      </Drawer>
    </>
  );
}
