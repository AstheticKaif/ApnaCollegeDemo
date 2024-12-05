const myForm = document.querySelector('.feedback-form');
const para = document.querySelector('p');

// Regular expressions for validation -->string for matching 
const usernameRegex = /^[a-z0-9]{3,12}$/; // Only lowercase letters and numbers, 3-12 characters
const userFeedBackRegex = /^.{20,50}$/;  // Feedback between 20-50 characters

// Event listener for form submission
myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission(refressh )

    // Get form values
    const usernameValue = myForm.username.value;
    const feedbackValue = myForm.feedback.value;

    // Validate form inputs using regular expressions
    const usernameIsValid = usernameRegex.test(usernameValue);
    const feedbackIsValid = userFeedBackRegex.test(feedbackValue);

    // Clear previous validation message
    para.innerText = '';

    // Check if both inputs are valid
    if (usernameIsValid && feedbackIsValid) {
        para.innerText = 'Validation success! Your feedback has been received.';
        para.style.color = 'green';
    } else {
        // Provide specific error messages based on which field is invalid
        if (!usernameIsValid) {
            para.innerText += 'Username must be between 3-12 characters and can only contain lowercase letters and numbers. ';
        }
        if (!feedbackIsValid) {
            para.innerText += 'Feedback must be between 20-50 characters long.';
        }
        para.style.color = 'red';
    }
});