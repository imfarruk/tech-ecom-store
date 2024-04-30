export const homeQuantityToggle = (event, id, stock, a) => {
  const currentCardElement =
    document.querySelector(`#card${id}`) ||
    document.querySelector("#productDetails");

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (a == "addTo") {
    productQuantity.innerText = 1;
    productQuantity.setAttribute("data-quantity", 1);
    console.log(id, stock, a);
  } else {
    if (event.target.className === "cartIncrement") {
      if (quantity < stock) {
        quantity += 1;
      } else if (quantity === stock) {
        quantity = stock;
      }
    }
    if (event.target.className === "cartDecrement") {
      if (quantity > 1) {
        quantity -= 1;
      }
    }
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity);
    return quantity;
  }
};
