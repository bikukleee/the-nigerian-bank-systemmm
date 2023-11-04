document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("namesb").value;
    const password = document.getElementById("password").value;

    if (password === "") {
        alert("Please enter a valid password");
    } else {
        // Clear the previous account's data if it exists
        localStorage.removeItem(name);
        localStorage.removeItem(name + '-balance');

        // Set the new account data
        localStorage.setItem(name, password);
        localStorage.setItem(name + '-balance', 0);

        alert(`Thank you for signing up, ${name}. Your new account is created and ready to use.`);
        window.location.href = "index2.html";
    }
});
