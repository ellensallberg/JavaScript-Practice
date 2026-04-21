//Assignment 3
function isValidPassword(password, username) {
    
    if (password.length < 8) {
        console.log("your password isn't long enough");
        return false;
    }
    if (password.includes(" ")) {
        console.log("your password cannot include a space");
        return false;
    } 
    if (password.includes(username)) {
        console.log("your password cannot include your username");
        return false;
    } else {
        console.log("your password is valid");
        return true;
    }
}
console.log(isValidPassword("pass", "myUserName"));
console.log(isValidPassword("pass word", "myUserName"));
console.log(isValidPassword("myUserName", "myUserName"));
console.log(isValidPassword("myPassword", "myUserName"));

