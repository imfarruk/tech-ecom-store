import products from "./api/products.json";
import { getCartProductFromLocal } from "./getCartProductFromLocal";
import { fetchQuantityFromCart } from "./fetchQuantityFromCart";
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateProdCartTotal } from "./updateProdCartTotal";

let cartProducts = getCartProductFromLocal();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElm) => curElm.id === curProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  if(!filterProducts.length){
    // let productClone = document.importNode(templateContainer.content, true);
    // productClone.querySelector(".category").textContent = 'hello';
    // console.log(('hhhejhbc'));
    // cartElement.appendChild(productClone);
    document.querySelector("#productCartContainer").innerHTML = `<p style="text-align:center;font-size:22px">Cart is Empty</p>`
    return false;
  }
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const localStorageData = fetchQuantityFromCart(id, price);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".productQuantity").textContent =
      localStorageData.quantity;
    productClone.querySelector(
      ".productPrice"
    ).textContent = `₹${localStorageData.price.toFixed(2)}`;
    productClone.querySelector(
      ".actualPrice"
    ).textContent = `₹${price.toFixed(2)}`;
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProdFromCart(id);
      });

    productClone
      .querySelector(".imageContainer")
      .addEventListener("click", (event) => {
        const newUrl = `/productDetails.html?id=${id}`;
        window.location.href = newUrl;
        window.open(newUrl, (name = "_self"));
      });

    productClone
      .querySelector(".productName")
      .addEventListener("click", (event) => {
        const newUrl = `/productDetails.html?id=${id}`;
        window.location.href = newUrl;
        window.open(newUrl, (name = "_self"));
      });

    cartElement.appendChild(productClone);
  });
};

showCartProduct();
updateProdCartTotal();
