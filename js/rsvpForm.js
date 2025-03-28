const plusOneCheckbox = document.getElementById('plus-one');
const plusOneField = document.getElementById('plus-one-name-field');



const rsvpForm = document.getElementById('rsvp-form');
// Success Message
const successMessage = document.getElementById('success-message');
// Error Message
const errorMessage = document.getElementById('error-message');

plusOneCheckbox.addEventListener('change', () => {
    if (plusOneCheckbox.checked) {
        plusOneField.classList.remove('max-h-0', 'opacity-0');
        plusOneField.classList.add('max-h-40', 'opacity-100');
    } else {
        plusOneField.classList.add('max-h-0', 'opacity-0');
        plusOneField.classList.remove('max-h-40', 'opacity-100');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            allergies: document.getElementById('allergies').value,
            plusOne: document.getElementById('plus-one').checked ? "Yes" : "No",
            plusOneName: document.getElementById('plus-one-name').value
        };

        console.log(formData);
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxdmeMUgHnwGBOW4isRm9tZCkLCxZtW-urlX6r0dNq5xSfah3tnQhuHrCPsI7uBMkHBjQ/exec', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'text/plain'
                }
            });

            const result = await response.json(); 

            if (result.status === "success") {
                
                // Optional: Fade out the form
                rsvpForm.classList.add('opacity-0');
                
                //Display success message
                setTimeout(() => {
                    rsvpForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('animate-fade-in');
                }, 500); // Matches the transition duration
                
            } else {
                //Display error message
                setTimeout(() => {
                    errorMessage.classList.remove('hidden');
                    errorMessage.classList.add('animate-fade-in');
                }, 500); // Matches the transition duration
                    
                //Display error message from Google Apps Script
                errorMessage.innerText = result.data;
            }
        } catch (error) {
            alert("Something went wrong. Please try again later.");
        }
    });
});