//   ********************* Cart product page *******************//

let allProducts =document.querySelector('.products');





function drawProductIncart(allproduct =[] ){
    let products = JSON.parse(localStorage.getItem("productInCart")) || allproduct;
    let y =products.map((product) =>{
  return ` <div class="product-card">
  <img src="${product.img}" alt="">
  <div class="product-desc">
      <h3>${product.title}</h3>
      <span>color:${product.color}</span>
  </div>
  <div class="product-btn">
      <button class="add_to_cart" onClick=removeCart(${product.id})>remove from cart</button>
      
  </div>
</div>`;

    }
    )

    allProducts.innerHTML = y;
}

function removeCart(id){
     let getproudct = localStorage.getItem("productInCart");

    if(getproudct){
        let items = JSON.parse(getproudct);
        let filteritem = items.filter((x => x.id !==id ))
        localStorage.setItem("productInCart",JSON.stringify(filteritem))
        console.log(filteritem)
        drawProductIncart(filteritem)

    }

    
}
drawProductIncart()
