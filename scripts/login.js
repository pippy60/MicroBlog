document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("login").addEventListener("click", ()=>{
        api.login({
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
        }, data => {
            document.getElementById("loginResult").innerHTML = JSON.stringify(data)
            localStorage.token = data.token; // store on client browser disk for later use on the content.html page
            window.location.href = "content.html"
        });
    });

});