function homePage() {
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
	const baguettesPhoto = document.createElement('img');
	baguettesPhoto.src = '../src/baguette.jpeg';
	baguettesPhoto.alt = 'Image of Lovely Bread';

	const homeText = document.createElement('p');
	homeText.id = 'welcome-text';
	homeText.textContent = `
            Welcome to the finest French eating-hole this side of the River Bann.
            With lots of different types of foods you have no idea how to pronounce,
            all you need to do is sit back, relax, and let us put snails in your mouth.
			`;

	content.appendChild(homeHeader);
	content.appendChild(tabsDiv);
	content.appendChild(baguettesPhoto);
	content.appendChild(homeText);
}

export { homePage };
