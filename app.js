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

let sections = document.querySelectorAll('.content-section');

window.onscroll = () => {
    let activeTab = document.querySelector('.mdc-tab--active');
    let activeTabIndicator = document.querySelector('.mdc-tab-indicator--active');

    for(let i = sections.length - 1; i >= 0; i--) {

        if(sections[i].getBoundingClientRect().top <= navbar.offsetHeight && sections[i] !== activeTab) {
            if(activeTab) { 
                activeTab.classList.remove('mdc-tab--active');
                activeTabIndicator.classList.remove('mdc-tab-indicator--active');
            };
            if(document.getElementById(sections[i].id + '-tab') {
                const tab = document.getElementById(sections[i].id + '-tab');
                const tabIndicator = document.getElementById(sections[i].id + '-tab-indicator');
                tab.classList.add('mdc-tab--active');
                tabIndicator.classList.add('mdc-tab-indicator--active');
            }
            break;
        }
    }
};