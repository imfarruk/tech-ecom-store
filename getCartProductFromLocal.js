import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocal = () =>{
    let cartProducts = localStorage.getItem('cartProduct');
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    updateCartValue(cartProducts)
    return cartProducts;
}