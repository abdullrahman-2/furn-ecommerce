let username = document.querySelector("#user-name");
let passsword = document.querySelector("#password");
let email = document.querySelector("#email");
let regbtn =document.querySelector("#sign-up");


regbtn.addEventListener("click",(e)=>{
    e.preventDefault()
if(username.value === "" || passsword.value === "" || email.value === ""){
    alert("please fill all fields")
}else{
    localStorage.setItem("username",username.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("passsword",passsword.value);
    alert("Register successfully");
    setTimeout(()=>{
     window.location = "login.html";
    },3000)

} 

})