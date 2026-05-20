let account = {
    accountName: "Ellen Sällberg",
    balance: 0,

    getBalance() {
        console.log (account.balance)
    },

    deposit() { 
        const depositAmount = parseFloat(
        prompt("How much would you like to deposit?")
        )
        if (isNaN(parseInt(depositAmount)) || depositAmount < 0) {
            console.log ("invalid amount")
        }
        else {
            account.balance = (account.balance + depositAmount);
        }
    },

    withdrawl() { 
        const withdrawlAmount = parseFloat(
        prompt("How much would you like to withdrawl?")
        )
        if (isNaN(parseInt(withdrawlAmount)) || withdrawlAmount < 0 || withdrawlAmount > account.balance) {
            console.log ("invalid amount")
        }
        else {
            account.balance = (account.balance - withdrawlAmount);   
        }
    },

    getAccountName() {
        console.log (account.accountName)
    },

    logOut() {
        running = false
        console.clear()
    },

    deafult() {
        console.log ("invalid choice")
    }
}

running = true

atm()

function atm() {

    while (running) {

        const message = parseFloat(
            prompt("1.) See Balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name 5.) Exit"
            )
        );

        switch (message) {
            case 1:
                account.getBalance();
                break;

            case 2:
                account.deposit();
                break;

            case 3:
                account.withdrawl();
                break;

            case 4:
                account.getAccountName();
                break;

            case 5:
                account.logOut();
                break;

            default:
                account.deafult();
                break;
        }
    } 
}
