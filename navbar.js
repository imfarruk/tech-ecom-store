const navbarHTML =  `
<section class="top_txt">
<div class="head container">
  <div class="head_txt">
    <p>Free shipping, 30-day return or refund guarantee.</p>
  </div>
  <div class="sing_in_up">
    <a href="login.html">SIGN IN</a>
    <a href="signup.html">SIGN UP</a>
  </div>
</div>
</section>
<div class="container">

<div class="navbar-brand">
  <a href="index.html">
    <p class="tech-ecom">Tech Ecom Store</p>
  </a>
</div>
<nav class="navbar">
  <ul>
    <li class="nav-item">
      <a href="/" class="nav-link">Home </a>
    </li>
    <li class="nav-item">
      <a href="about.html" class="nav-link">about</a>
    </li>
    <li class="nav-item">
      <a href="products.html" class="nav-link">products</a>
    </li>
    <li class="nav-item">
      <a href="contact.html" class="nav-link">contact</a>
    </li>
    <li class="nav-item">
      <a
        href="addToCart.html"
        class="nav-link add-to-cart-button"
        id="cartValue"
      >
        <i class="fa-solid fa-cart-shopping"></i> 0</a
      >
    </li>
  </ul>
</nav>

</div>
`

const navbarElem = document.querySelector(".section-navbar");
navbarElem.insertAdjacentHTML("afterbegin", navbarHTML);