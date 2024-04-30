import { getCartProductFromLocal } from "./getCartProductFromLocal";

export const fetchQuantityFromCart = (id, price) => {
  let cartProducts = getCartProductFromLocal();
  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;
  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }
  return { quantity, price };
};
