const heroHTML= `
<!-- ========== Start Hero-Section ========== -->
<div class="container grid grid-two--cols">
<div class="section-hero--content">
  <p class="hero-subheading">Explore the Latest in Tech Industries</p>
  <h1 class="hero-heading">
    Your Destination for Cutting-Edge Gadgets!
  </h1>
  <p class="hero-para">
    Welcome to Tech Ecom Store, your ultimate destination for
    cutting-edge gadgets! Explore the latest in tech innovation and
    style with us. Shop now and discover a world of possibilities!
  </p>
  <div class="hero-btn">
    <a href="products.html" class="btn">Explore Our Products</a>
  </div>
</div>
<div
  class="section-hero-image"
  data-aos="fade-up"
  data-aos-delay="600"
>
  <figure>
    <img
      src="./images/heroSection.svg"
      alt="coding languages using html css js"
    />
  </figure>
</div>
</div>
    <!-- ========== End Hero-Section ========== -->
`

const heroElem = document.querySelector(".section-hero");
heroElem.insertAdjacentHTML("afterbegin", heroHTML);