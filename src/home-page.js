function homePage() {
	content.children[2].innerHTML = '';

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

	content.children[2].appendChild(baguettesPhoto);
	content.children[2].appendChild(homeText);

	// return { baguettesPhoto, homeText };
	// Is this better JS? So then module is not 'reaching out' and is isolated?
}

export { homePage };
