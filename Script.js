var modal = document.getElementById("zen-modal");
var closeBtn = document.querySelector(".close-btn");

// Elements inside modal to update
var titleEl = document.querySelector(".article-title");
var subtitleEl = document.querySelector(".article-subtitle");
var bylineEl = document.querySelector(".article-byline");
var imageEl = document.querySelector(".article-image");
var bodyEl = document.querySelector(".article-body");

// ------ ARTICLE DATA ------
const articles = {
  hydrogen: {
    title: "Hydrogen vs Electric Cars: The 2025 Showdown",
    subtitle: "Why the future of green transportation is now a two-horse race.",
    byline: "By Jane Smith — Published Nov 28, 2025",
    image: "https://via.placeholder.com/800x400?text=Hydrogen+Cars",
    body: `
            <p>Hydrogen fuel cell vehicles are receiving renewed attention as automakers search for alternatives to traditional lithium-ion batteries...</p>
            <p>Supporters argue hydrogen fills fast and emits only water vapor. Critics point to infrastructure challenges...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, pariatur
    rem? Excepturi quasi ullam laboriosam! Ipsum reiciendis molestiae eos, qui
    quaerat tempora quam nemo dolor consequuntur sapiente laborum amet sed quas
    at odit iure voluptatum laudantium illum aliquam modi. Consectetur debitis
    rerum saepe, adipisci assumenda quae rem eos numquam incidunt unde id soluta
    at nisi cum voluptatibus consequuntur. Dolorum tempore consectetur ut neque
    repellendus! Minima magni quasi voluptate, accusamus ex animi optio
    molestias provident facilis ullam at ipsa quae labore rerum in vel tempore
    porro, nesciunt iure cupiditate esse soluta voluptas? Molestias vel soluta
    minima ex nulla</p>
    
    <p>repellat earum? Commodi minima quod blanditiis accusamus
    iure nemo ab adipisci deleniti libero quo amet facere natus at voluptatem,
    dignissimos aperiam. Quasi quos aspernatur, alias nam architecto expedita ab
    et iste. Illo facilis veritatis consequatur sequi ab exercitationem ipsa
    minus vero, sit incidunt pariatur itaque, eligendi delectus debitis placeat
    repellat aspernatur. Ea amet molestias laudantium similique voluptates
    mollitia, hic corporis ipsa eos debitis deleniti ad nemo quam alias, natus
    aliquid reprehenderit id ullam dolor sit architecto eligendi tempore nulla.
    Totam quidem doloribus quibusdam id cupiditate vero, in vitae deleniti optio
    voluptatem eveniet ex ipsa iusto, nobis repellat dignissimos voluptas cum
    veniam ea inventore?
    </p>
          `,
  },

  aiArt: {
    title: "The Downsides of AI Artistry",
    subtitle: "Why rapid automation is reshaping creative industries.",
    byline: "By Alex Turner — Published Nov 20, 2025",
    image: "https://via.placeholder.com/800x400?text=AI+Art",
    body: `
            <p>AI tools now generate art in seconds, but artists say it comes with a cost...</p>
            <p>Questions around copyright, originality, and job displacement continue to rise...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, pariatur
    rem? Excepturi quasi ullam laboriosam! Ipsum reiciendis molestiae eos, qui
    quaerat tempora quam nemo dolor consequuntur sapiente laborum amet sed quas
    at odit iure voluptatum laudantium illum aliquam modi. Consectetur debitis
    rerum saepe, adipisci assumenda quae rem eos numquam incidunt unde id soluta
    at nisi cum voluptatibus consequuntur. Dolorum tempore consectetur ut neque
    repellendus! Minima magni quasi voluptate, accusamus ex animi optio
    molestias provident facilis ullam at ipsa quae labore rerum in vel tempore
    porro, nesciunt iure cupiditate esse soluta voluptas? Molestias vel soluta
    minima ex nulla</p>
    
    <p>repellat earum? Commodi minima quod blanditiis accusamus
    iure nemo ab adipisci deleniti libero quo amet facere natus at voluptatem,
    dignissimos aperiam. Quasi quos aspernatur, alias nam architecto expedita ab
    et iste. Illo facilis veritatis consequatur sequi ab exercitationem ipsa
    minus vero, sit incidunt pariatur itaque, eligendi delectus debitis placeat
    repellat aspernatur. Ea amet molestias laudantium similique voluptates
    mollitia, hic corporis ipsa eos debitis deleniti ad nemo quam alias, natus
    aliquid reprehenderit id ullam dolor sit architecto eligendi tempore nulla.
    Totam quidem doloribus quibusdam id cupiditate vero, in vitae deleniti optio
    voluptatem eveniet ex ipsa iusto, nobis repellat dignissimos voluptas cum
    veniam ea inventore?
    </p>
            
          `,
  },

  vcFunding: {
    title: "Is VC Funding Drying Up?",
    subtitle: "A look at the shifting landscape of tech investment.",
    byline: "By Sarah Chen — Published Nov 15, 2025",
    image: "https://via.placeholder.com/800x400?text=VC+Funding",
    body: `
            <p>After years of explosive growth, venture capital markets are showing signs of contraction...</p>
            <p>Higher interest rates and investor caution have slowed the pace of new deals...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, pariatur
    rem? Excepturi quasi ullam laboriosam! Ipsum reiciendis molestiae eos, qui
    quaerat tempora quam nemo dolor consequuntur sapiente laborum amet sed quas
    at odit iure voluptatum laudantium illum aliquam modi. Consectetur debitis
    rerum saepe, adipisci assumenda quae rem eos numquam incidunt unde id soluta
    at nisi cum voluptatibus consequuntur. Dolorum tempore consectetur ut neque
    repellendus! Minima magni quasi voluptate, accusamus ex animi optio
    molestias provident facilis ullam at ipsa quae labore rerum in vel tempore
    porro, nesciunt iure cupiditate esse soluta voluptas? Molestias vel soluta
    minima ex nulla</p>
    
    <p>repellat earum? Commodi minima quod blanditiis accusamus
    iure nemo ab adipisci deleniti libero quo amet facere natus at voluptatem,
    dignissimos aperiam. Quasi quos aspernatur, alias nam architecto expedita ab
    et iste. Illo facilis veritatis consequatur sequi ab exercitationem ipsa
    minus vero, sit incidunt pariatur itaque, eligendi delectus debitis placeat
    repellat aspernatur. Ea amet molestias laudantium similique voluptates
    mollitia, hic corporis ipsa eos debitis deleniti ad nemo quam alias, natus
    aliquid reprehenderit id ullam dolor sit architecto eligendi tempore nulla.
    Totam quidem doloribus quibusdam id cupiditate vero, in vitae deleniti optio
    voluptatem eveniet ex ipsa iusto, nobis repellat dignissimos voluptas cum
    veniam ea inventore?
    </p>
          `,
  },
};

// ------ OPEN ARTICLE HANDLER ------
document.querySelectorAll(".article-link").forEach((link) => {
  link.addEventListener("click", () => {
    const key = link.dataset.article;
    const article = articles[key];

    titleEl.innerHTML = article.title;
    subtitleEl.innerHTML = article.subtitle;
    bylineEl.innerHTML = article.byline;
    imageEl.src = article.image;
    bodyEl.innerHTML = article.body;

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("is-open"), 10);
  });
});

// ------ CLOSE MODAL ------
function closeModal() {
  modal.classList.remove("is-open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target == modal) closeModal();
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.classList.contains("is-open"))
    closeModal();
});
