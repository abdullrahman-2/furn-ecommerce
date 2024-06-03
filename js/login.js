let username = document.querySelector("#user-name");
let passsword = document.querySelector("#password");
let regbtn =document.querySelector("#sign-in");


let getUser =localStorage.getItem("username");
let getPassword =localStorage.getItem("passsword");
regbtn.addEventListener("click",function(e){
e.preventDefault()
    if(username.value === ""|| passsword.value ==="" ){
        alert("please Fill All fields")
    }else{
        if(username.value.trim() === getUser && passsword.value.trim() ===getPassword){
          
             setTimeout(function(){
                window.location ="index.html"
             },1500)

        }else{
            alert("wrong username or password ")
        }
    }
})

