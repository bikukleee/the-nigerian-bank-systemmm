// Check if the current page is the signup page or the banking page
if (window.location.href.includes("signup.html")) {
    // Code for the signup page
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("namesb").value;
        const password = document.getElementById("password").value;

        if (password === "") {
            alert("Please enter a valid password");
        } else {
            // Store user data in Local Storage
            localStorage.setItem('namesb', name);
            localStorage.setItem('password', password);
            localStorage.setItem('balance', 0); // Set initial balance to 0 for each new user
            alert(`Thank you for signing up, ${name}. Your new account is created and ready to use.`);
            window.location.href = "banking.html";
        }
    });
} else if (window.location.href.includes("banking.html")) {
    // Code for the banking system page
    const username = "username"; // Retrieve the username from the URL or other sources

    // Use the username to generate unique keys for this user's data
    const userKey = username.toLowerCase();

    let balance = parseFloat(localStorage.getItem(`${userKey}-balance`)) || 0;

    // Add event listeners for deposit, withdraw, check balance, and exit
    document.getElementById("deposit").addEventListener("click", deposit);
    document.getElementById("withdraw").addEventListener("click", withdraw);
    document.getElementById("balanceCheck").addEventListener("click", checkBalance);
    document.getElementById("exit").addEventListener("click", exit);

    function deposit() {
        // Deposit logic here
    }

    function withdraw() {
        // Withdraw logic here
    }

    function checkBalance() {
        // Check balance logic here
    }

    function exit() {
        // Exit logic here
    }
}
