const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const firstName = urlParams.get('first-name');
const lastName = urlParams.get('last-name');
const orgTitle = urlParams.get('organizational-title');
const email = urlParams.get('email-address');
const phone = urlParams.get('phone-number');
const businessName = urlParams.get('business-name');
const membership = urlParams.get('membership-level');
const description = urlParams.get('business-description');
const timestamp = urlParams.get('timestamp');

document.getElementById('thank-you-message').innerHTML = `
    <p>Thank you, ${firstName} ${lastName}!</p>
    <p>Your form has been successfully submitted.<p>
    <p>Your Organizational Title: ${orgTitle}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Business/Organization Name: ${businessName}</p>
    <p>Membership Level: ${membership}</p>
    <p>Business Description: ${description}</p>
    <p>Form submitted at: ${new Date(timestamp).toLocaleString()}</p>
`;