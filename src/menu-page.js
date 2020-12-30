function menuPage() {
	content.children[2].innerHTML = '';

	const menuText = document.createElement('p');
	menuText.id = 'menu-text';
	menuText.textContent = 'Menu page!';

	content.children[2].appendChild(menuText);
}

export { menuPage };
