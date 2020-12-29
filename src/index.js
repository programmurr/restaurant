import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

homePage();

document.querySelector('#home-tab').addEventListener('click', homePage);
document.querySelector('#menu-tab').addEventListener('click', menuPage);
document.querySelector('#contact-tab').addEventListener('click', contactPage);
