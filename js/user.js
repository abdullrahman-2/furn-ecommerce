let userinfo =document.querySelector('#user-info');
let user =document.querySelector('#user');
// let links =document.querySelector("#link");
let logOutBtn =document.querySelector("#logOutbtn");

if(localStorage.getItem("username")){
    // links.remove();
    user.innerHTML = "Welcome Mr: " + localStorage.getItem('username')
    userinfo.style.display = 'flex';
}

logOutBtn.addEventListener("click",()=>{
    localStorage.clear()
  
        window.location ="login.html"
    })

