import { getCartProductFromLocal } from "./getCartProductFromLocal";
import { updateCartValue } from "./updateCartValue";
import { updateProdCartTotal } from "./updateProdCartTotal";
import { showToast } from "./showToast";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLocal();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  localStorage.setItem("cartProduct", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
  updateProdCartTotal();
};
