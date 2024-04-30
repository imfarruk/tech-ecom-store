import productss from "./api/products.json";
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
import { getCartProductFromLocal } from "./getCartProductFromLocal";

let cartProducts = getCartProductFromLocal();

export const showProductContainer = (products) => {
  if (!products) {
    productContainer.append(`<p>Products are not available this time</p>`);
    return false;
  }

  products.forEach((currProd) => {
    let { id, category, description, image, name, price, stock } = currProd;
    let newStock = stock;
    const filteredItems = cartProducts.filter((item) => {
      if (item.id === id) {
        stock = stock - item.quantity;
      }
    });
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    // productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      4 * price
    }`;
    productClone.querySelector(".productDescription").textContent = description;

    stock === 0
      ? ((productClone.querySelector(
          ".productStock"
        ).textContent = `out of stock`),
        (productClone.querySelector(".productStock").style.color = `red`))
      : (productClone.querySelector(".productStock").textContent = stock);

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, newStock);
      });

    productClone
      .querySelector(".imageContainer")
      .addEventListener("click", (event) => {
        const newUrl = `/productDetails.html?id=${id}`;
        window.location.href = newUrl;
        window.open(newUrl, (name = "_self"));
      });

    productContainer.append(productClone);
  });
};
