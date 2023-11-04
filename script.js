document.getElementById("deposit").addEventListener("click", deposit);
document.getElementById("withdraw").addEventListener("click", withdraw);
document.getElementById("balanceCheck").addEventListener("click", checkBalance);
document.getElementById("exit").addEventListener("click", exit);

let username = "name"; // You need to set this based on the user's session

let balance = parseFloat(localStorage.getItem(username + '-balance')) || 0;

function deposit() {
    const amount = Number(prompt("Enter the deposit amount:"));
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
    } else {
        balance += amount;
        updateBalance();
        saveBalance();
    }
}

function withdraw() {
    const amount = Number(prompt("Enter the withdrawal amount:"));
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
    } else if (amount > balance) {
        alert("Insufficient balance.");
    } else {
        balance -= amount;
        updateBalance();
        saveBalance();
    }
}

function checkBalance() {
    alert(`Current balance: $${balance}`);
}

function exit() {
    localStorage.setItem(username + '-balance', balance);
    alert("Thank you for using our banking system. Have a great day!");
    window.location.href = "index.html";
}

function updateBalance() {
    document.getElementById("balance").textContent = `Balance: $${balance}`;
}

function saveBalance() {
    localStorage.setItem(username + '-balance', balance);
}

updateBalance();
