let account = {
    accountName: "Ellen Sällberg",
    balance: 0
}
console.log(account);

function atm() {
    const message = parseFloat(
        prompt("1.) See Balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name 5.) Exit"
        )
    );

    switch (message) {
        case 1:
            function getBalance() {
                console.log (account.balance)
            }
            getBalance();
            atm();
            break;

        case 2:
            function deposit() { 
            const depositAmount = parseFloat(
                prompt("How much would you like to deposit?")
                )
                if (depositAmount < 0) {
                    console.log ("invalid amount")
                }
                else {
                    account.balance = (account.balance + depositAmount);
                }
            }
            deposit()
            atm();
            break;

        case 3:
            function withdrawl() { 
            const withdrawlAmount = parseFloat(
                prompt("How much would you like to withdrawl?")
                )
                if (withdrawlAmount < 0) {
                    console.log ("invalid amount")
                }
                else {
                    account.balance = (account.balance - withdrawlAmount);   
                }
            }
            withdrawl()
            atm();
            break;

        case 4:
            function getAccountName() {
                console.log (account.accountName)
            }
            getAccountName();
            atm();
            break;

        case 5:
            function logOut() {
                console.clear();
                console.log ("logged out")
        }
        logOut()
        break;

        default:
        console.log ("invalid choice")
        atm();
        break;
    }
}
atm()