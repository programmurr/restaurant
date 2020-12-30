import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

homePage();

document.querySelector('#home-tab').addEventListener('click', homePage);
document.querySelector('#menu-tab').addEventListener('click', menuPage);
document.querySelector('#contact-tab').addEventListener('click', contactPage);

// Write the tab-switching logic inside of index.js. You should have event listeners
// for each tab that wipes out the current contents and then runs the correct ‘tab module’
// to populate it again.

// Need to google how to do this
