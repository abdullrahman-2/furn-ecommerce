
// ******************************************

let allProducts =document.querySelector('.products');

let products =[ { 
    id:1, title:"110$", color:"black",   img:"images/pexels-eric-mufasa-578798-1350789.jpg"},{
    id:2, title:"320$", color:"red",   img:"images/pexels-fotoaibe-1571460.jpg"},{
    id:3, title:"500$", color:"blue",   img:"images/pexels-pixabay-276528.jpg"},{
    id:4, title:"220$", color:"yellow",   img:"images/pexels-donaldtong94-133919.jpg"},
    {id:5, title:"1110$", color:"yellow",   img:"images/pexels-ingo-609768.jpg"},
    {id:6, title:"999$", color:"yellow",   img:"images/pexels-kowalievska-1148955.jpg"},
    {id:7, title:"109$", color:"yellow",   img:"images/pexels-lina-1813502.jpg"},
    {id:8, title:"209$", color:"yellow",   img:"images/pexels-pixabay-275484.jpg"},
    {id:9, title:"120$", color:"yellow",   img:"images/pexels-pixabay-276528.jpg"},
    {id:10, title:"223$", color:"yellow",   img:"images/pexels-pixabay-276583.jpg"},
    {id:11, title:"190$", color:"yellow",   img:"images/pexels-steve-923192.jpg"},
    {id:12, title:"950$", color:"yellow",   img:"images/pexels-timesaverhacks-1080696.jpg"},
    {id:13, title:"770$", color:"yellow",   img:"images/pexels-whynugrohou-3097112.jpg"},
    {id:14, title:"853$", color:"yellow",   img:"images/pexels-pixabay-276583.jpg"},

      
];

function drawProduct(){
    let y =products.map((product) =>{


  return ` <div class="product-card">
  <img src="${product.img}" alt="">
  <div class="product-desc">
      <h3>${product.title}</h3>
      <span>color:${product.color}</span>
  </div>
  <div class="product-btn">
      <button class="add_to_cart" onClick=addtoCart(${product.id})>add to cart</button>
      <i class="fas fa-heart"></i>
  </div>
</div>`;

    })

    allProducts.innerHTML = y;
}

drawProduct()
let cartProduct = document.querySelector("#cart-selcet");
let badge =document.getElementById("badge");

let additems =localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : []

if(additems){

    additems.map((item)=>{
      return  cartProduct.innerHTML += `<li><a class="dropdown-item" href="#">${item.title}</a></li>`;

    })
    badge.style.display = 'block'
    badge.innerHTML = additems.length;

}

function addtoCart(id){
let choose_proudct =products.find((product)=> product.id === id )
cartProduct.innerHTML += `<p>${choose_proudct.title}</p>`;
let productLength = document.querySelectorAll("#cart-selcet p");
additems = [...additems,choose_proudct];
localStorage.setItem("productInCart",JSON.stringify(additems))
badge.style.display ="block";
badge.innerHTML = productLength.length;

//  localStorage.setItem("productId",id);
//  localStorage.setItem("productTitle",choose_proudct.title);
//  localStorage.setItem("productImg",choose_proudct.img);
//  localStorage.setItem("productColor",choose_proudct.color);
//  console.log(localStorage.getItem("productTitle"))




}






function check(){
    if(localStorage.getItem("username")){
        window.location = "cart-selcet"
    }else{
        window.location ="login.html"
    }
}




let cartProducts =document.querySelector('.cart-product')
let shoppigCart = document.querySelector(".shopping-cart");
shoppigCart.addEventListener("click",()=>{if (cartProducts.innerHTML !== "") {
    if (cartProducts.style.display === 'block') {
      cartProducts.style.display = 'none';
    } else {
      cartProducts.style.display = 'block';
    }
  }})





