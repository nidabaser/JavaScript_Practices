/*
    ATM Uygulaması
1. Bakiye görüntüleme
2. Para çekme
3. Para yatırma
4. Çıkış

*/

let newLine = "\r\n";
let balance = 1000;
let menuText = "1.Display balance" + newLine
+ "2.Withdraw" + newLine
+ "3.Deposit" + newLine
+ "4.Exit" + newLine;

let select = prompt(menuText);

switch (select) {

    case "1":
        alert("Balance : " + balance);
    break;

    case "2":
        let withdrawAmount = Number(prompt("Enter withdraw amount: "));

        if (withdrawAmount < balance) {
            balance -= withdrawAmount;
            alert("Remaining balance: " + balance);
        } else {
            alert("Error because " + newLine + "Your balance: " + balance
                + " is smaller than your withdraw amount!");
        }
    break;
    
    case "3":
        let depositAmount = Number(prompt("Enter deposit amount: "));
        balance += depositAmount;
        alert("Your current balance: " + balance);
    break;

    case "4":
        console.log("Exit");
    break;

    default:
        console.log("Please select valid option [1,2,3,4]");
    break;
        
}