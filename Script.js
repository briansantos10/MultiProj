var modal = document.getElementById("zen-modal");
var closeBtn = document.querySelector(".close-btn");

// Elements inside modal to update
var titleEl = document.querySelector(".article-title");
var subtitleEl = document.querySelector(".article-subtitle");
var bylineEl = document.querySelector(".article-byline");
var imageEl = document.querySelector(".article-image");
var bodyEl = document.querySelector(".article-body");
var imageCreditEl = document.querySelector(".article-image-credit");

// ------ ARTICLE DATA ------
const articles = {
  protectArtists: {
    imageCredit: {
      photographer: "Júnior Ferreira",
      photographerUrl:
        "https://unsplash.com/@juniorferreir_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/person-catching-light-bulb-7esRPTt38nI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "Protect Artists From AI Theft",
    subtitle: "AI tools can now mimic voices and styles without permission.",
    byline: "By Brian Capellan-Santos — Published Nov 16, 2025",
    image:
      "https://images.unsplash.com/photo-1506967726964-da9127fdec36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    body: `




    <p>Over the past few years, artificial intelligence (AI) has evolved from just a research tool into something capable of composing sounds and recreating the voices of famous musicians. What may have begun as experiments on platforms like TikTok and YouTube—where users created “AI Drake” or “AI Kanye” remixes for laughs—has now grown into a phenomenon that blurs the boundaries between art and forgery.</p>

<p>AI music has reached a tipping point where it can convincingly replicate an artist's tone, rhythm, and style. Most importantly, this is done without their involvement or consent. As these technologies become more advanced and accessible, they begin to challenge not only what it means to create music but also who has the right to be called its creator.</p>

<p>Currently, the conversation around AI music centers on excitement and entertainment, often overlooking the responsibility involved. Many creators and distributors of AI songs neglect to consider the ethical and legal implications of their actions. As the distinction between abuse and imitation becomes less clear, it raises a critical question: How can innovation be recognized without compromising integrity?</p>

<p>This issue highlights a growing legal problem. Current copyright laws do not protect the human voice, leaving artists vulnerable to illegal voice cloning (Widodo and Bakir). Furthermore, AI models are trained on vast libraries of copyrighted music without recognition or payment, raising significant concerns about ownership and compensation (Deng and Ma). In addition to threatening musicians' futures, these practices undermine trust in the music industry. Without clear regulation, AI music risks transforming art into data and artists into mere sources.</p>

    `,
  },
  hydrogen: {
    imageCredit: {
      photographer: "testingggg",
      photographerUrl:
        "https://unsplash.com/@juniorferreir_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/person-catching-light-bulb-7esRPTt38nI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title:
      "Voice Cloning Out of Control: Artists Say Their Identities Are Being Hijacked.",
    subtitle:
      "U.S. AI policies favor innovation over enforcement, leaving artists vulnerable, unlike stricter EU regulations.",
    byline: "By Jane Smith — Published Nov 28, 2025",
    image:
      "https://images.unsplash.com/photo-1506967726964-da9127fdec36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    body: `
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
    imageCredit: {
      photographer: "Júnior Ferreira",
      photographerUrl:
        "https://unsplash.com/@juniorferreir_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/person-catching-light-bulb-7esRPTt38nI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title:
      "Copyright on the Brink: Why Current Law Can’t Keep Up With AI Music",
    subtitle:
      "U.S. AI policies favor innovation over enforcement, leaving artists vulnerable, unlike stricter EU regulations.",
    byline: "By Alex Turner — Published Nov 20, 2025",
    image: "https://via.placeholder.com/800x400?text=AI+Art",
    body: `
           <p>The United States currently uses a decentralized, market-driven approach to AI policy. Companies are encouraged to manage risks like bias, misuse, and ethical concerns, but these guidelines are voluntary. Unlike the EU’s AI Act, which enforces strict rules, U.S. policies rely on self-regulation. This leaves artists vulnerable to unlicensed voice cloning and copyright violations.</p>

    <p>While agencies like NIST provide frameworks for AI risk management, their recommendations carry no legal weight. Executive orders, such as Biden’s on “Safe, Secure, and Trustworthy AI,” urge labeling deepfakes and AI-generated content, but lack enforceability. Without mandatory compliance, AI misuse can go unpunished, creating gaps that threaten both creativity and compensation for musicians.</p>

    <p>
The EU enforces binding obligations for AI development, ensuring accountability and legal consequences for violations. In contrast, U.S. policies prioritize technological innovation, which can encourage rapid growth but fails to protect artists effectively. This regulatory gap allows companies to experiment without clear responsibility for consent or copyright adherence.    </p>
            
<p>Musicians face real risks from unregulated AI. Their voices and styles can be cloned and monetized without permission, undermining both their income and artistic control. Voluntary guidelines alone cannot prevent large-scale abuse, and without clear regulation, creative integrity is at stake.</p>

<p>These flaws highlight the need for enforceable legislation. A national voice registry, explicit consent requirements, and coordinated oversight by agencies like the USCO and FTC could create a practical system. By combining legal authority with existing technology, artists could be protected without stifling innovation.</p>
          `,
  },

  vcFunding: {
    title: "How AI Music Oversight Could Work",
    subtitle:
      "Monitoring AI-generated music wouldn’t require new agencies. Platforms could use automated detection while USCO and FTC handle disputes. Funding through licensing fees makes the system self-sustaining, proving large-scale enforcement is practical.",
    byline: "By Sarah Chen — Published Nov 15, 2025",
    image: "https://via.placeholder.com/800x400?text=VC+Funding",
    body: `
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

    // Add image credit if it exists
    if (article.imageCredit) {
      imageCreditEl.innerHTML = `
        Photo by
        <a href="${article.imageCredit.photographerUrl}">${article.imageCredit.photographer}</a>
        on
        <a href="${article.imageCredit.photoUrl}">Unsplash</a>
      `;
    } else {
      imageCreditEl.innerHTML = ""; // Clear if no credit
    }

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
