let account = {
    accountName: "Ellen Sällberg",
    balance: 1000
}
console.log(account);

function atm() {
    const message = parseFloat(
        prompt("1.) See Balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name"
        )
    );

    switch (message) {
        case 1:
            function getBalance() {
                console.log (account.balance)
            }
            getBalance();
            break;

        case 2:
            function deposit() { 
            const depositAmount = parseFloat(
                prompt("How much would you like to deposit?")
                )
                account.balance = (account.balance + depositAmount);
            }
            deposit()
            break;

        case 3:
            function withdrawl() { 
            const withdrawlAmount = parseFloat(
                prompt("How much would you like to withdrawl?")
                )
                account.balance = (account.balance - withdrawlAmount);
            }
            withdrawl()
            break;

        case 4:
            function getAccountName() {
                console.log (account.accountName)
            }
            getAccountName();
            break;
    }
}
atm()