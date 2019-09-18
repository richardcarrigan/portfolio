import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCDrawer } from '@material/drawer';
import {MDCFormField} from '@material/form-field';
import {MDCTextField} from '@material/textfield';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const drawer = new MDCDrawer(document.querySelector('.mdc-drawer--modal'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
