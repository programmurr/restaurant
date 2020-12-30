function contactPage() {
	const contactHeader = document.createElement('h2');
	contactHeader.id = 'contact-header';
	contactHeader.textContent = 'Compliment us:';

	const contactAddress = document.createElement('ul');
	contactAddress.id = 'contact-address';
	const line1 = document.createElement('li');
	line1.textContent = "Opposite Dicey Riley's";
	const line2 = document.createElement('li');
	line2.textContent = 'Market Street';
	const line3 = document.createElement('li');
	line3.textContent = 'Strabane';
	const line4 = document.createElement('li');
	line4.textContent = 'BT99 9DR';
	const phone = document.createElement('li');
	phone.textContent = 'Tel: 028 8888 8888';
	const facebook = document.createElement('a');
	facebook.href = '#';
	facebook.className = 'fa fa-facebook';

	[ line1, line2, line3, line4, phone, facebook ].forEach(function(line) {
		contactAddress.appendChild(line);
	});

	return { contactHeader, contactAddress };
}

export { contactPage };
