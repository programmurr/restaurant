function menuPage() {
	const content = document.querySelector('#content');
	content.innerHTML = '';

	const homeHeader = document.createElement('h1');
	homeHeader.id = 'restaurant-name';
	homeHeader.textContent = "Monsieur Murr's";

	// Tabs
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

	tabsDiv.appendChild(homeTab);
	tabsDiv.appendChild(menuTab);
	tabsDiv.appendChild(contactTab);

	// Content
	const menuText = document.createElement('p');
	menuText.id = 'menu-text';
	menuText.textContent = 'Menu page!';

	content.appendChild(homeHeader);
	content.appendChild(tabsDiv);
	content.appendChild(menuText);
}

export { menuPage };
