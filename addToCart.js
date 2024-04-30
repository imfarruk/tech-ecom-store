import { getCartProductFromLocal } from "./getCartProductFromLocal";
import { updateCartValue } from "./updateCartValue";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { showToast } from "./showToast";

getCartProductFromLocal();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocal();
  const currProdElem =
    document.querySelector(`#card${id}`) ||
    document.querySelector("#productDetails");
  id = Number(id);
  let quantity = currProdElem.querySelector(".productQuantity").innerText;
  let price = currProdElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  let quantity1 = stock + Number(quantity);

  if (existingProduct && quantity > 1 && existingProduct.quantity < stock) {
    showToast("addExtra", quantity);
    if (quantity > stock) {
      showToast("stock insuficient");
      return false;
    }
    quantity = existingProduct.quantity + Number(quantity);

    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
    homeQuantityToggle(event, id, stock, "addTo");

    document.querySelector("#productDetails")
      ? setTimeout(() => {
          "addToCart.html", (name = "_self");
        }, 2000)
      : "";
    setTimeout(() => {
      window.open("addToCart.html", (name = "_self"));
    }, 2000);
    return true;
  }
  if (existingProduct && quantity1 > stock) {
    showToast("stock insuficient");
    homeQuantityToggle(event, id, stock, "addTo");
    return false;
  }
  if (existingProduct) {
    showToast("addmore");
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);

  let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem("cartProduct", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  showToast("add");
  setTimeout(() => {
    window.open("addToCart.html", (name = "_self"));
  }, 2000);
};
