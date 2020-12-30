function menuPage() {
	const menuHeader = document.createElement('h2');
	menuHeader.id = 'menu-header';
	menuHeader.className = 'menu';
	menuHeader.textContent = 'Le Menu';

	// Starter
	const starterHeader = document.createElement('h3');
	starterHeader.id = 'starter-header';
	starterHeader.className = 'menu';
	starterHeader.textContent = 'Appetiser';

	const starterList = document.createElement('ul');
	starterList.id = 'starter-list';
	starterList.className = 'menu';

	const escargot = document.createElement('li');
	escargot.id = 'starter-escargot';
	escargot.className = 'menu';
	escargot.textContent = 'Escargots a la Bourguignonne';

	const squid = document.createElement('li');
	squid.id = 'starter-squid';
	squid.className = 'menu';
	squid.textContent = 'Provençal Stuffed Squid';

	// Entree
	const mainHeader = document.createElement('h3');
	mainHeader.id = 'main-header';
	mainHeader.className = 'menu';
	mainHeader.textContent = 'Entree';

	const mainList = document.createElement('ul');
	mainList.id = 'main-list';
	mainList.className = 'menu';

	const chicken = document.createElement('li');
	chicken.id = 'main-chicken';
	chicken.className = 'menu';
	chicken.textContent = 'Chicken Confit';

	const beef = document.createElement('li');
	beef.id = 'main-beef';
	beef.className = 'menu';
	beef.textContent = 'Boeuf Bourguignon';

	// Sorbet
	const dessertHeader = document.createElement('h3');
	dessertHeader.id = 'dessert-header';
	dessertHeader.className = 'menu';
	dessertHeader.textContent = 'Sorbet';

	const dessertList = document.createElement('ul');
	dessertList.id = 'main-list';
	dessertList.className = 'menu';

	const meringue = document.createElement('li');
	meringue.id = 'dessert-meringue';
	meringue.className = 'menu';
	meringue.textContent = 'Brown Sugar Meringues';

	starterList.appendChild(escargot);
	starterList.appendChild(squid);

	mainList.appendChild(chicken);
	mainList.appendChild(beef);

	dessertList.appendChild(meringue);

	const displayArray = [ menuHeader, starterHeader, starterList, mainHeader, mainList, dessertHeader, dessertList ];

	return { displayArray };
}

export { menuPage };
