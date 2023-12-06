//redirect to home page and set user name in local storage
function login()
{
    let username=document.getElementById("uname").value
    console.log(username);
    localStorage.setItem("USERNAME",username)
    window.location='./home.html'// for redirecting
}