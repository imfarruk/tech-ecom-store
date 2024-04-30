import { getCartProductFromLocal } from "./getCartProductFromLocal";

export const updateProdCartTotal = () =>{
    let cartProducts = getCartProductFromLocal();
    let productSubTotal = document.querySelector('.productSubTotal');
    let productTotal = document.querySelector('.productFinalTotal');
    let taxPrice = document.querySelector('.productTax');
    
    taxPrice = Number(taxPrice.innerText.replace("₹",""))
    
    let initialValue= 0;
    let totalProductPrice = cartProducts.reduce((accum,curElm)=>{
        let productPrice = parseInt(curElm.price) || 0;
        return accum+productPrice
    },initialValue)
    
    productSubTotal.textContent = `₹${totalProductPrice}`
    productTotal.textContent= `₹${(totalProductPrice+taxPrice)}`;
}