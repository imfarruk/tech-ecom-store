const comingSoonHTML = `
  <section class="container">
    <div class="coming-soon">
      <p>Coming Soon...</p>
    </div>
  </section>
`

const comingSoonElemt = document.querySelector(".section-coming-soon");
comingSoonElemt.insertAdjacentHTML("afterbegin", comingSoonHTML);