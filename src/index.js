import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCDrawer } from '@material/drawer';
import { MDCTextField } from '@material/textfield';
import './style.scss';

// Instantiation
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const drawer = new MDCDrawer(document.querySelector('.mdc-drawer--modal'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const navbar = document.getElementById('navbar');
const navbarHeight = navbar.offsetHeight;

const sections = document.querySelectorAll('.content-section');

window.onscroll = () => {
  const activeTab = document.querySelector('.mdc-tab--active');

  for (let i = sections.length - 1; i >= 0; i--) {
    const top = sections[i].getBoundingClientRect().top;
    const bottom = sections[i].getBoundingClientRect().bottom;

    if (
      top <= navbarHeight &&
      bottom > navbarHeight &&
      sections[i] !== activeTab
    ) {
      if (document.getElementById(sections[i].id + '-tab')) {
        document
          .getElementById(sections[i].id + '-tab')
          .classList.add('mdc-tab--active');
        document
          .getElementById(sections[i].id + '-tab-indicator')
          .classList.add('mdc-tab-indicator--active');
      }
    } else {
      if (document.getElementById(sections[i].id + '-tab')) {
        document
          .getElementById(sections[i].id + '-tab')
          .classList.remove('mdc-tab--active');
        document
          .getElementById(sections[i].id + '-tab-indicator')
          .classList.remove('mdc-tab-indicator--active');
      }
    }
  }
};

const contactSubmitBtn = document.getElementById('contact-submit-btn');

contactSubmitBtn.addEventListener('click', e => {
  const subject = document.getElementById('email-subject');
  const body = document.getElementById('email-body');

  const email =
    'mailto:me@richardcarrigan.com?subject=' +
    subject.value +
    '&body=' +
    body.value;

  window.location.href = email;

  subject.value = '';
  body.value = '';

  e.preventDefault();
});
