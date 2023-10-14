document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("namesb").value;
    const password = document.getElementById("password").value;

    if (password === ""){
        alert("please enter valid password")
    } else {
        alert(`thank you for signing up ${name} your new account is created and ready to use`);
        window.location.href = "ბანკი.html"
    }




})