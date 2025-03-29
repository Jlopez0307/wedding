const plusOneCheckbox = document.getElementById('plus-one');
const plusOneField = document.getElementById('plus-one-name-field');
const plusOneTextField = document.querySelector('#plus-one-name');
const submitButton = document.querySelector('#submit-button');



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

        //Disable submit button and change text
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
        submitButton.classList.add('opacity-50', "cursor-not-allowed", "animate-pulse");



        const selectedFoodChoice = document.querySelector('input[name="foodChoice"]:checked').value;

        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            allergies: document.getElementById('allergies').value,
            plusOne: document.getElementById('plus-one').checked ? "Yes" : "No",
            plusOneName: document.getElementById('plus-one-name').value,
            foodChoice: selectedFoodChoice
        };

        console.log(formData);
        try {
            const result = await fetch('https://script.google.com/macros/s/AKfycby2-4laTYQ0x8V98dd86tNAedpCEENQmMHMDgr9Eg35CF_aUzD6Mu83F6mHoJeKJNOIDg/exec', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8' // Change from 'text/plain' to 'application/json'
                },
                
            });

            const textResponse = await result.text();

            if (textResponse === "Success") {
                
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
                errorMessage.innerText = "This email has already been used. Please use a different email.";
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
                submitButton.classList.remove('opacity-50', "cursor-not-allowed", "animate-pulse");
            }
        } catch (error) {
            console.log(error);
        }
    });
});