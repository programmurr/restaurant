function contactPage() {
	content.children[2].innerHTML = '';

	const contactText = document.createElement('p');
	contactText.id = 'contact-text';
	contactText.textContent = 'Contact page!';

	content.children[2].appendChild(contactText);
}

export { contactPage };
