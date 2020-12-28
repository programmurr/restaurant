const content = document.querySelector('#content');

function pageLoad() {
	const homeHeader = document.createElement('h1');
	homeHeader.id = 'restaurant-name';
	homeHeader.textContent = "Monsieur Murr's";

	const baguettesPhoto = document.createElement('img');
	baguettesPhoto.src = '../src/baguette.jpeg';
	baguettesPhoto.alt = 'Image of Lovely Bread';

	const homeText = document.createElement('p');
	homeText.id = 'welcome-text';
	homeText.textContent = `
            Welcome to the finest French eating-hole this side of the River Bann.
            With lots of different types of foods you have no idea how to pronounce,
            all you need to do is sit back, relax, and let us put slugs in your mouth.
`;

	content.appendChild(homeHeader);
	content.appendChild(baguettesPhoto);
	content.appendChild(homeText);
}

export { pageLoad };
