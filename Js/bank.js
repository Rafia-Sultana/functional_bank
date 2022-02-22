document.getElementById('logIn-Submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    //Check email and password
    if (userEmail == 'rafia@gmail.com' && userPassword == 'kayab') {
        //console.log('valid');
        window.location.href = 'banking.html';
    }

});

