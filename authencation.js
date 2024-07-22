// Array of user objects
let users = [
    {username: "Rehmat ullah", password: "Rehmat@123"},
    {username: "Adil Amin", password: "Adil@11"},
    {username: "Shari", password: "Shari@1122"},
];

// Using the prompt method for user 
let inputUsername = prompt("Enter Your Username:");
let inputPassword = prompt("Enter Your Password:");
let authenticated = false;

// Authenticate user
for (let i = 0; i < users.length; i++) {
    console.log(`Checking: ${users[i].username} === ${inputUsername} && ${users[i].password} === ${inputPassword}`);
    if (users[i].username === inputUsername && users[i].password === inputPassword) {
        authenticated = true;
        break;
    }
}

if (authenticated) {
    alert("Authentication Successful");
} else {
    alert("Authentication failed. Please check your username and password.");

    // Forget password
    let forgetPassword = confirm("Are you sure you want to forget your password?");
    if (forgetPassword) {
        let forgetUsername = prompt("Enter your username to reset your password:");
        let userFound = false;
        for (let i = 0; i < users.length; i++) {
            console.log(`Checking for reset: ${users[i].username} === ${forgetUsername}`);
            if (users[i].username === forgetUsername) {
                userFound = true;
                let newPassword = prompt("Enter your new password:").trim();
                users[i].password = newPassword;
                alert("Password reset successfully. Please login again.");
                break;
            }
        }
        if (!userFound) {
            alert("Username not found.");
        }

        // Login again after reset password
        let loginAgain = confirm("Do you want to try logging in again?");
        if (loginAgain) {
            let inputUsernameAgain = prompt("Enter your username:").trim();
            let inputPasswordAgain = prompt("Enter your password:").trim();
            authenticated = false;
            for (let i = 0; i < users.length; i++) {
                console.log(`Checking again: ${users[i].username} === ${inputUsernameAgain} && ${users[i].password} === ${inputPasswordAgain}`);
                if (users[i].username === inputUsernameAgain && users[i].password === inputPasswordAgain) {
                    authenticated = true;
                    break;
                }
            }
            if (authenticated) {
                alert("Authentication Successful");
            } else {
                alert("Authentication failed. Please check your username and password.");
            }
        }
    }
}
