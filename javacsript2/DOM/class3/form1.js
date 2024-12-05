let myform = document.querySelector(".feedback-form");
let myPara = document.querySelector("p");

// Regex Patterns
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email Validation
let numberRegex = /^(?:\+91|0)?[6-9][0-9]{9}$/; // Phone Number Validation
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password Strength
let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/; // Username Validation
let dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // Date in DD/MM/YYYY Format
let urlRegex = /^(https?:\/\/)(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?$/; // URL Validation
let zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/; // U.S. ZIP Code

myform.addEventListener('submit', (e) => {
    e.preventDefault();

    // Example of how you can get the input values from the form
    const usernameValue = myform.username.value;
    const emailValue = myform.email.value;
    const phoneNumberValue = myform.phoneNo.value;
    const passwordValue = myform.password.value;
    const dateValue = myform.date.value;
    const urlValue = myform.url.value;
    const zipcodeValue = myform.zipcode.value;
    const feedbackValue = myform.feedback.value;

    // Validating each field
    const usernameIsValid = usernameRegex.test(usernameValue);
    const emailIsValid = emailRegex.test(emailValue);
    const phoneNumberIsValid = numberRegex.test(phoneNumberValue);
    const passwordIsValid = passwordRegex.test(passwordValue);
    const dateIsValid = dateRegex.test(dateValue);
    const urlIsValid = urlRegex.test(urlValue);
    const zipcodeIsValid = zipcodeRegex.test(zipcodeValue);
    const feedbackIsValid = userFeedBackRegex.test(feedbackValue);

    // Check if all validations are successful
    if (
        usernameIsValid &&
        emailIsValid &&
        phoneNumberIsValid &&
        passwordIsValid &&
        dateIsValid &&
        urlIsValid &&
        zipcodeIsValid &&
        feedbackIsValid
    ) {
        myPara.innerText = "Validation successful";
        myPara.style.color = "green";
    } else {
        myPara.innerText = "Validation unsuccessful";
        myPara.style.color = "red";
    }
});