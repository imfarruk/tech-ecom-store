import products from "./api/products.json";
import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { getCartProductFromLocal } from "./getCartProductFromLocal";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let cartProducts = getCartProductFromLocal();
let filterProducts = cartProducts.filter((curProd) => {
  if (Number(curProd.id) == Number(id)) {
    return curProd;
  }
});
let avalStock = filterProducts.length !== 0 ? filterProducts[0].quantity : "";

let productImage = document.querySelector(".productImage");
let productName = document.querySelector(".productName");
let productCategory = document.querySelector(".category");
let productDesciption = document.querySelector(".productDescription");
let productPrice = document.querySelector(".productPrice");
let productStock = document.querySelector(".productStock");

let addIntoCart = document.querySelector(".add-to-cart-button");

if (!products.length) {
  window.location.href = `index.html`;
  window.open(`index.html`, (name = "_self"));
  // return false;
}
let productAllDetails = products.filter((curVal) => {
  if (Number(curVal.id) == Number(id)) {
    return curVal;
  }
});

productAllDetails = productAllDetails[0];
let stock = productAllDetails.stock;

if (avalStock <= stock) {
  avalStock = stock - avalStock;
}

productName.innerText = productAllDetails.name;
productImage.src = productAllDetails.image;
productCategory.innerText = productAllDetails.category;
productDesciption.innerText = productAllDetails.description;
productPrice.innerText = `₹${productAllDetails.price}`;
avalStock === 0
  ? ((productStock.innerText = `out of stock`),
    (productStock.style.color = `red`))
  : (productStock.innerText = avalStock);

document.querySelector(".stockElement").addEventListener("click", (event) => {
  homeQuantityToggle(event, id, avalStock);
  // const currentCardElement = document.querySelector(`#productDetails`)
  // const productQuantity = currentCardElement.querySelector('.productQuantity');
  // let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;
  // if(event.target.className === 'cartIncrement'){
  //     if(quantity < stock){
  //      quantity +=1;
  //     }else if(quantity === stock){
  //      quantity = stock
  //     }
  //  }
  //  if(event.target.className === 'cartDecrement'){
  //      if(quantity>1){
  //          quantity -=1;
  //      }
  //  }
  //  productQuantity.innerText = quantity;
  //  productQuantity.setAttribute('data-quantity',quantity)
  //  return quantity
});

document
  .querySelector("#product-details-add")
  .addEventListener("click", (event) => {
    addToCart(event, id, stock);
  });
