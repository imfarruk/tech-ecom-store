export const showToast = (operation,quant)=>{
   const toast  = document.createElement("div");
   toast.classList.add("toast");

   if(operation === "add"){
    toast.textContent = `Product has been added `;
   }else if(operation === "delete"){
    toast.textContent = `Product has been deleted`;
   }else if(operation === "stock insuficient"){
        toast.textContent = `Stock is not available`;
   }else if(operation === 'addExtra'){
        toast.textContent = `${quant} more product is added`
   }else{
    toast.textContent = ` Product is already in cart`;
   }

   document.body.appendChild(toast);

   setTimeout(()=>{
    toast.remove();
   },2000)
}