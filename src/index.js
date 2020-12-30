import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

const content = document.querySelector('#content');

const homeHeader = document.createElement('h1');
homeHeader.id = 'restaurant-name';
homeHeader.textContent = "Monsieur Murr's";

const tabsDiv = document.createElement('div');
tabsDiv.id = 'tabs';

const homeTab = document.createElement('div');
homeTab.className = 'tab';
homeTab.id = 'home-tab';
homeTab.textContent = 'Home';

const menuTab = document.createElement('div');
menuTab.className = 'tab';
menuTab.id = 'menu-tab';
menuTab.textContent = 'Menu';

const contactTab = document.createElement('div');
contactTab.className = 'tab';
contactTab.id = 'contact-tab';
contactTab.textContent = 'Contact';

const subContent = document.createElement('div');
subContent.id = 'sub-content';

tabsDiv.appendChild(homeTab);
tabsDiv.appendChild(menuTab);
tabsDiv.appendChild(contactTab);

content.appendChild(homeHeader);
content.appendChild(tabsDiv);
content.appendChild(subContent);

function loadHomePage() {
	subContent.innerHTML = '';
	subContent.appendChild(homePage().baguettesPhoto);
	subContent.appendChild(homePage().homeText);
}

function loadMenuPage() {
	subContent.innerHTML = '';

	menuPage().displayArray.forEach(function(element) {
		subContent.appendChild(element);
	});
}

function loadContactPage() {
	subContent.innerHTML = '';
	subContent.appendChild(contactPage().contactHeader);
	subContent.appendChild(contactPage().contactAddress);
}

document.querySelector('#home-tab').addEventListener('click', loadHomePage);
document.querySelector('#menu-tab').addEventListener('click', loadMenuPage);
document.querySelector('#contact-tab').addEventListener('click', loadContactPage);

loadHomePage();
