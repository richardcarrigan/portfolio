import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCDrawer } from '@material/drawer';
import {MDCTextField} from '@material/textfield';

// Instantiation
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const drawer = new MDCDrawer(document.querySelector('.mdc-drawer--modal'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

let navbar = document.getElementById('navbar');
const navbarHeight = navbar.offsetHeight;

let sections = document.querySelectorAll('.content-section');

window.onscroll = () => {
    let activeTab = document.querySelector('.mdc-tab--active');

    for(let i = sections.length - 1; i >= 0; i--) {
        let top = sections[i].getBoundingClientRect().top;
        let bottom = sections[i].getBoundingClientRect().bottom;

        if(top <= navbarHeight && bottom > navbarHeight && sections[i] !== activeTab) {
            if(document.getElementById(sections[i].id + '-tab')) {
                document.getElementById(sections[i].id + '-tab').classList.add('mdc-tab--active');
                document.getElementById(sections[i].id + '-tab-indicator').classList.add('mdc-tab-indicator--active');
            }
        } else {
            if(document.getElementById(sections[i].id + '-tab')) {
                document.getElementById(sections[i].id + '-tab').classList.remove('mdc-tab--active');
                document.getElementById(sections[i].id + '-tab-indicator').classList.remove('mdc-tab-indicator--active');
            }
        }
    }
};
