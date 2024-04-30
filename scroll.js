
let scrollToTop = document.querySelector("#btn-style");

window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
      scrollToTop.style.display='block';
    }else{
      scrollToTop.style.display='none';
    }
}
)

scrollToTop.addEventListener(('click'),()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})
