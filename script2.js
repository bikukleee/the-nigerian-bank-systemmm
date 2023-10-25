document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("namesb").value;
    const password = document.getElementById("password").value;

    if (password === "") {
        alert("Please enter a valid password");
    } else {
        
        if (localStorage.getItem('namesb') === name && localStorage.getItem('password') === password) {
            alert("Welcome back, " + name);
            window.location.href = "index2.html";
        } else {
            localStorage.setItem('namesb', name);
            localStorage.setItem('password', password);
            localStorage.setItem('balance', 0); 
            alert(`thank you for signing up ${name}. Your new account is created and ready to use `);

            window.location.href = "index2.html";
        }
    }
});
