document.getElementById("deposit").addEventListener("click", deposit);
document.getElementById("withdraw").addEventListener("click", withdraw);
document.getElementById("balanceCheck").addEventListener("click", checkBalance);

document.getElementById("exit").addEventListener("click", exit);


let balance = 0;

function deposit() {
    const amount = parseFloat(prompt("enter the deposit amount:"));
    if (isNaN(amount) || amount <= 0){
        alert("please enter valid amount")
    } else {

        balance += amount;
        updateBalance();
    }


}

function withdraw() {
    const amount = parseFloat(prompt("Enter the withdrawal amount:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");


    } else if (amount > balance) {
        alert("Insufficient balance.");
    } else {

        balance -= amount;
        updateBalance();
    }
}

function checkBalance() {
    alert(`Current balance: $${balance}`);
}


function exit() {
    alert("Thank you for using our banking system. Have a great day!");
    window.location.href = "რეგისტრაციის გვერდი.html";
}

function updateBalance() {
    document.getElementById("balance").textContent = `balance: $${balance}`;
}



updateBalance();