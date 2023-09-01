function renderContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const h1 = document.createElement('h1');
    h1.textContent = "Contact Us";
    contactDiv.appendChild(h1);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const address = document.createElement('div');
    address.classList.add('section');
    const addressH2 = document.createElement('h2');
    addressH2.textContent = "Address:"
    address.appendChild(addressH2);
    const addressP = document.createElement('p');
    addressP.innerHTML = `Savory Haven Restaurant<br>
                        456 Gourmet Lane<br>
                        Fictionalville, FCT 12345<br>
                        Imaginary Land`;
    address.appendChild(addressP);
    contactInfo.appendChild(address);

    const phone = document.createElement('div');
    phone.classList.add('section');
    const phoneH2 = document.createElement('h2');
    phoneH2.textContent = "Phone"
    phone.appendChild(phoneH2);
    const phoneP = document.createElement('p');
    phoneP.innerHTML = `<strong>Reservations & Inquiries:</strong> +1 (123) 456-7890<br>
    <strong>General Contact:</strong> +1 (987) 654-3210`;
    phone.appendChild(phoneP);
    contactInfo.appendChild(phone);

    const email = document.createElement('div');
    email.classList.add('section');
    const emailH2 = document.createElement('h2');
    emailH2.textContent = "Email us:"
    email.appendChild(emailH2);
    const emailP = document.createElement('p');
    emailP.innerHTML = `<strong>Reservations:</strong> reservations@savoryhaven.com<br>
    <strong>General Inquiries:</strong> info@savoryhaven.com`;
    email.appendChild(emailP);
    contactInfo.appendChild(email);

    contactDiv.appendChild(contactInfo);

    return contactDiv;      
}

export default renderContactPage;