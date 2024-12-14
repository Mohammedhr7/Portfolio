// Initialize EmailJS with your public key
(function() {
    emailjs.init("user_a1b2c3d4e5f6g7h8i9j0"); // Your actual public key
})();

function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: phone,
        message: message,
        to_name: 'Mohammed Harrous',
    };

    emailjs.send('service_xyz123', 'template_abc456', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });

    return false;
}