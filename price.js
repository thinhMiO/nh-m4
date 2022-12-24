// thêm vào giỏ hàng
const button = document.querySelectorAll('button');

button.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var buttonItem = event.target
            var productItem = buttonItem.parentElement
            var productImg = productItem.querySelector('img').src 
            var productName = productItem.querySelector('h2').innerText
            var productPrice = productItem.querySelector('#price-item').innerText

            addcart(productImg,productName,productPrice)
    }})
})

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".name")
        if (productT[i].innerHTML == productName) {
            alert("Products already in the cart")
            return
        }
    }
    var trContent ='<tr><td class="img" style="display: flex;"><img style="width: 50px;" src="'+productImg+'" alt=""><p class="name">'+productName+'</p></td><td><span class="price">'+productPrice+'</span></td><td><input style="outline: none;" type="number" value="1" min="1"></td><td class="delete" style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}
//Hết thêm vào giỏ hàng
//tính tổng tiền

function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        console.log(productPrice)
        totalA = inputValue * productPrice * 1000
        totalC = totalC + totalA
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
     inputchange()
}
const shopping = document.querySelector('.fa-bag-shopping')
const shoppingclose = document.querySelector('.fa-xmark')
console.log(shoppingclose)
shopping.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "flex"
})
shoppingclose.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "none"
})
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement
            cartItemDelete.remove()
            cartTotal()
        })
    }
}

// ---------tăng số lượng sản phẩm và tính lại tổng tiền------
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}
