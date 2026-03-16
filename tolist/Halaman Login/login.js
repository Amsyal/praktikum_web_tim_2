const form = document.querySelector("form");

const correctUsername = "iwan";
const correctPassword = "iwan123";

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === correctUsername && password === correctPassword){
        alert("Login Berhasil ✅");
    } 
    else {
        alert("Login Gagal ❌\nUsername atau Password salah");
    }
});