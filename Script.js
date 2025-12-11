var modal = document.getElementById("zen-modal");
var closeBtn = document.querySelector(".close-btn");
var titleEl = document.querySelector(".article-title");
var subtitleEl = document.querySelector(".article-subtitle");
var bylineEl = document.querySelector(".article-byline");
var imageEl = document.querySelector(".article-image");
var bodyEl = document.querySelector(".article-body");
var imageCreditEl = document.querySelector(".article-image-credit");

const articles = {
  protectArtists: {
    imageCredit: {
      photographer: "Jon Moore",
      photographerUrl:
        "https://unsplash.com/@thejmoore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/gray-padlocks-lot-bBavss4ZQcA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "Protect Artists From AI Theft",
    subtitle: "AI tools can now mimic voices and styles without permission.",
    byline: "By Brian Capellan — Posted on Nov 16, 2025",
    image:
      "https://images.unsplash.com/photo-1506967726964-da9127fdec36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Square red bars with white locks attached",
    body: `
    <p>Over the past few years, artificial intelligence has evolved from just a research tool into something capable of composing sounds and now recreating the voices of famous musicians. What may have begun as an experimentation on platforms like TikTok and YouTube, where users created “AI Drake” remixes for laughs, has now grown into a phenomenon that blurs the boundaries between art and forgery. </p>

    <p>The AI-generated song "Heart on My Sleeve" which mimicked the voices of Drake, The Weeknd, Future, and 21 Savage, was first released to streaming services on April 4, 2023. 
It was created by a user known as "Ghostwriter977" on TikTok and quickly went viral on TikTok before being removed from major platforms like Spotify, Apple Music, and YouTube due to copyright claims by Universal Music Group, the label that represents both artists <a href="https://www.cbsnews.com/news/ai-song-drake-the-weeknd-pulled-off-digital-platforms/">(CBS News)</a>.</p>

<p>AI music has reached a tipping point where it can convincingly replicate an artist's tone, rhythm, and style. Most importantly, this is done without their involvement or consent. As these technologies become more advanced and accessible, they begin to challenge not only what it means to create music but also who has the right to be called its creator.</p>

<p>Currently, the conversation around AI music centers on excitement and entertainment, often overlooking the responsibility involved. Many creators and distributors of AI songs neglect to consider the ethical and legal implications of their actions. As the distinction between abuse and imitation becomes less clear, it raises a critical question: How can innovation be recognized without compromising integrity?</p>

<p>This issue highlights a growing legal problem. Current copyright laws do not protect the human voice, leaving artists vulnerable to illegal voice cloning  <a href="https://eudl.eu/doi/10.4108/eai.25-5-2024.2349353">(Widodo and Bakir)</a>. Furthermore, AI models are trained on vast libraries of copyrighted music without recognition or payment, raising significant concerns about ownership and compensation (Deng and Ma). In addition to threatening musicians' futures, these practices undermine trust in the music industry. Without clear regulation, AI music risks transforming art into data and artists into mere sources.</p>
    `,
  },

  voiceCloning: {
    imageCredit: {
      photographer: "愚木混株 Yumu",
      photographerUrl:
        "https://unsplash.com/@cdd20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/a-pile-of-musical-notes-and-a-red-sign-C_qlsy8hAPw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title:
      "Voice Cloning Out of Control: Artists Say Their Identities Are Being Hijacked.",
    subtitle:
      "U.S. AI policies favor innovation over enforcement, leaving artists vulnerable.",
    byline: "By Brian Capellan — Posted on Nov 28, 2025",
    image:
      "https://images.unsplash.com/photo-1642744902052-2a64f06b117f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A pile of musical notes and a red sign",
    body: `
    <p>Voice cloning technology has accelerated so quickly that artists are struggling to keep up with the risks.
    In the United States, the spread of AI tools is happening under what experts like Davtyan describe as a “market-driven” regulatory approach. He notes that U.S. AI policy prioritizes innovation and economic growth over enforcement, leaving creators with almost no real protection <a href="https://scholarlycommons.law.case.edu/jolti/vol16/iss2/2/">(Davtyan)</a>. 
    As a result, musicians are witnessing their identities being replicated, remixed, and redistributed without permission and without consequences for the people generating these copies.</p>

    <p>Unlike the European Union, which enforces strict rules through its AI Act, the U.S. relies on voluntary guidelines that companies can simply ignore.
    This enables platforms and AI developers to scrape vocals, styles, and copyrighted recordings to train voice models without givin credit to the original artists. 
    Many musicians only find out their voice has been cloned after the audio goes viral.</p>

    <p>These unauthorized voice replicas create more than just confusion. Tshey risk replacing the artist they imitate. Some AI-generated songs have reached thousands of listeners who believed the track was authentic, blurring the line between parody and outright fraud. 
    When fans can no longer distinguish between a real performance and an AI, an artist’s control over their sound, reputation, and livelihood falls apart.</p>

    <p>Artists and experts warn that the current trajectory will only worsen without enforceable rights and consent mechanisms. 
    The longer the U.S. delays regulation, the more normalized voice theft becomes and the harder it will be to protect musicians from having their identities hijacked by algorithms.</p>
    `,
  },

  copyrightBrink: {
    imageCredit: {
      photographer: " Meghan Hessler",
      photographerUrl:
        "https://unsplash.com/@meghankix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/a-close-up-of-a-clock-with-a-red-second-hand-Bn3GRSXWp3A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title:
      "Copyright on the Brink: Why Current Law Can't Keep Up With AI Music",
    subtitle:
      "U.S. AI policies favor innovation over enforcement, leaving artists vulnerable, unlike stricter EU regulations.",
    byline: "By Brian Capellan — Posted on Nov 20, 2025",
    image:
      "https://images.unsplash.com/photo-1639255711703-3663b4b51753?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A close up of a broken clock with a red second hand",
    body: `
    <p>The United States currently uses a decentralized, market-driven approach to AI policy. Companies are encouraged to manage risks like bias, misuse, and ethical concerns, but these guidelines are voluntary. 
    Unlike the <a href="https://artificialintelligenceact.eu/ai-act-explorer">EU's AI Act</a>, which enforces strict rules, U.S. policies rely on self-regulation. 
    This leaves artists vulnerable to unlicensed voice cloning and copyright violations.</p>

    <p>While agencies like NIST provide frameworks for AI risk management, their recommendations carry no legal weight. 
    Executive orders, such as Biden's on "Safe, Secure, and Trustworthy AI," urge labeling deepfakes and AI-generated content, but lack enforceability. Without compliance, AI misuse can go unpunished, creating gaps that threaten both creativity and compensation for musicians.</p>

    <p>The EU enforces binding obligations for AI development, ensuring accountability and legal consequences for violations. 
    In contrast, U.S. policies prioritize technological innovation, which can encourage rapid growth but fails to protect artists effectively. 
    This regulatory gap allows companies to experiment without clear responsibility for consent.</p>
            
    <p>Musicians face real risks from unregulated AI. 
    Their voices and styles can be cloned and monetized without permission, undermining both their income and artistic control. 
    Voluntary guidelines alone cannot prevent large-scale abuse, and without clear regulation, creative integrity is at stake.</p>

    <p>These flaws highlight the need for enforceable legislation. A national voice registry, explicit consent requirements, and coordinated oversight by agencies like the USCO and FTC could create a practical system. 
    By combining legal authority with existing technology, artists could be protected without disregard to innovation.</p>
    `,
  },

  congressPressure: {
    imageCredit: {
      photographer: "Elijah Mears ",
      photographerUrl:
        "https://unsplash.com/@elijahjmears?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-E94nZORR5qc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "Congress Faces Pressure to Regulate AI Music Platforms",
    subtitle:
      "AI music regulation is feasible using existing agencies, platform detection, and self-sustaining funding models.",
    byline: "By Brian Capellan — Posted Nov 15, 2025",
    image:
      "https://images.unsplash.com/photo-1624417963912-8532660d9de8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "White concrete congressional building under blue sky during daytime",
    body: `
      <p>As AI-generated music continues to spread across major platforms, Congress is facing mounting pressure to step in. 
      Lawmakers have been slow to act, largely because regulating AI has been framed as overly complex or technically impossible. 
      But experts argue that the foundation already exists. It simply needs to be organized and enforced.</p>

      <p>For example, platforms like Spotify, YouTube, and TikTok already use automated systems to detect copyrighted material. 
      Expanding these systems to detect unauthorized AI voice clones is technologically feasible. 
      It would require cooperation from AI developers, but not entirely new infrastructure. A combination of metadata scanning and watermark detection could filter out illegal clones before they spread.</p>

      <p>Government agencies like the U.S. Copyright Office (USCO) and the Federal Trade Commission (FTC) are positioned well enough to handle disputes and enforcement. The USCO already governs ownership rights, and the FTC has authority over deception. 
      With proper legislation, these agencies could coordinate to approve registered voice identities, process consent permissions, and penalize violators.</p>

      <p>The USCO has gone through a major upgrade of its IT systems. It introduced an online Recordation System, redesigned its registration interface, and built a cloud-based Copyright System to make its services more digitized (USCO). 
      While the Office processes hundreds of thousands of registrations each year, the ongoing tech upgrades demonstrate that adding new types of data would be a scalable incremental step.</p>

      <p>Funding is another major concern, but a self-sustaining model could be the solution.
       Licensing fees from AI music platforms, distribution companies, and model developers could be reinvested into monitoring and enforcement. 
       This minimizes taxpayer burden while ensuring the system remains up to date.</p>

      <p>What lawmakers must recognize is that every month of inaction allows unregulated AI music to grow in scale and influence. 
      The tools to protect artists already exist. What is needed now is the will that prioritizes creators’ rights.</p>
    `,
  },

  buildingLaws: {
    imageCredit: {
      photographer: "Olena Bohovyk",
      photographerUrl:
        "https://unsplash.com/@olenkasergienko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/books-on-brown-wooden-shelf-Ft_Wn-K5YH8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "Building AI Music Laws",
    subtitle:
      "U.S. AI rules are voluntary, leaving artists unprotected. Binding laws and real consent systems are needed.",
    byline: "By Brian Capellan — Posted on Dec 11, 2025",
    image: "./assets/images/olena-bohovyk-Ft_Wn-K5YH8-unsplash.jpg",
    imageAlt: "Antique law books on wooden library shelf",
    body: `
    <p>Building effective AI music legislation begins with recognizing a key problem: current U.S. rules are almost entirely voluntary. Agencies like NIST provide guidelines for responsible AI behavior, but companies are not required to follow them. 
    This creates a system where developers can train on artists’ voices and copyrighted music with no obligation to ask permission or share profits.</p>

<p>To address this gap, lawmakers need to implement binding, enforceable laws. 
A central peice would be a mandatory consent system that requires AI developers and music platforms to verify artists’ approval before their work or voice is used. 
This prevents voice theft at the source, rather than dealing with the damage afterward.</p>

<p>A national voice registry within the U.S. Copyright Office will serve as the foundation. 
Artists would be able to register their voice identity, similar to how they register songs today. 
Platforms and AI companies would then be required to check this registry before generating music using a specific voice. 
Unauthorized use would trigger penalties, enforced through the FTC’s authority over deceptive and unfair practices.</p>

<p>In addition to consent, lawmakers must establish standards for dataset transparency. 
AI developers should be required to disclose whether their training materials include copyrighted music or vocal samples. 
This creates accountability for how models are built and who benefits from them.</p>

    `,
  },

  systemWorks: {
    imageCredit: {
      photographer: "Airalo",
      photographerUrl:
        "https://unsplash.com/@airalo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/person-holding-smartphone-browsing-travel-app-36cLNK7lzg4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "A System That Can Work",
    subtitle:
      "AI music rules are feasible using current agencies, upgraded systems, and platform moderation.",
    byline: "By Brian Capellan — Posted on Dec 11, 2025",
    image: "./assets/images/airalo-36cLNK7lzg4-unsplash.jpg",
    imageAlt: "Hand holding smartphone displaying app interface",
    body: `
    <p>Despite concerns that regulating AI music would be too complex, a practical and efficient system is entirely achievable using existing tools.
     Major music platforms already use content-detection software to scan for copyrighted material. This means that the groundwork for identifying unauthorized AI-generated songs is already in place.</p>

<p>By integrating voice matching algorithms and watermarks, platforms could block AI tracks that mimic an artist’s voice without documented consent. 
This process would function similarly to current copyright filters, but with an added layer of identity verification. </p>

<p>Government agencies also have distinct roles to play. 
The USCO could manage a national voice registry that confirms who owns a vocal identity, while the FTC would handle cases where AI-generated songs intentionally mislead consumers or violate agreements. 
The benefit to this is that these responsibilities align with what the agencies already do, meaning no new methods need to be built.</p>

<p>Financially, the system is sustainable. 
Licensing fees from AI developers, music platforms, and distribution networks would fund detection improvements.
This ensures the system does not rely on unpredictable federal budgets and can update itself.</p>

<p>With clear rules, coordinated oversight, and self-funded infrastructure, the path to protecting artists is not only realistic—it is already within reach. A functional regulatory system would allow AI music to grow responsibly while safeguarding the artists whose voices shape culture.</p>

    `,
  },

  aiMyths: {
    imageCredit: {
      photographer: "Júnior Ferreira",
      photographerUrl:
        "https://unsplash.com/@juniorferreir_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      photoUrl:
        "https://unsplash.com/photos/person-catching-light-bulb-7esRPTt38nI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    title: "Addressing AI Music Myths",
    subtitle:
      "Today's cloning is realistic and harmful, making regulation necessary.",
    byline: "By Brian Capellan — Posted on Dec 11, 2025",
    image: "./assets/images/junior-ferreira-7esRPTt38nI-unsplash.jpg",
    imageAlt: "Hand holding illuminated lightbulb",
    body: `
     <p>One of the biggest misconceptions about AI-generated music is that it is harmless fun just modern parody with no real consequences. 
     This myth overlooks how dramatically the technology has and will continue to improve.
      Today's voice-cloning models can replicate an artist's tone, breath patterns, quirks, and delivery so precisely that many cannot distinguish real from fake.</p>

    <p>Another common myth is that AI songs do not harm artists because they are "not real music." In reality, cloned vocals compete directly with authentic work. 
    Viral AI tracks like "Heart on My Sleeve" by Ghostwriter977 have already overshadowed official releases, drawing attention, streams, and profits away from the musicians it imitates. </p>

    <p>There is also a belief that regulation would diminish creativity or slow down innovation. 
    But protecting artists' voices does not limit artistic exploration but simply requires consent and transparency just as sampling laws created a fair system for remix's.
    AI music rules would establish boundaries without blocking creative use.</p>

    <p>Finally, some assume that the problem is too new or too complicated for lawmakers to address. Yet the legal tools already exist.
    You can refrence my earlier posts if you're not convinced. What is missing is not capability but urgency.</p>

    <p>AI music is not a passing trend. It is a powerful technology that requires responsible use and safeguards to protect the artists who make our culture possible.</p>

    <p>AI moreover has become a powerful instrument that helps people work more efficiently and explore new possibilities. Similarly, AI-generated music can support creation and not diminish it. 
    While its current misuse poses real risks, this technology is still in its infancy. 
    It's only through thoughtful regulation that AI music can evolve into a source for artists to experiment and push the boundaries of what music can be. 
    Music itself is ever-changing, as is society, and embracing these changes responsibly could open doors to new, impactful forms of artistic expression.</p>
 
    `,
  },
};

document.querySelectorAll(".article-link").forEach((link) => {
  link.addEventListener("click", () => {
    const key = link.dataset.article;
    const article = articles[key];

    titleEl.innerHTML = article.title;
    subtitleEl.innerHTML = article.subtitle;
    bylineEl.innerHTML = article.byline;
    imageEl.src = article.image;
    imageEl.alt = article.imageAlt || "Article image";

    if (article.imageCredit) {
      imageCreditEl.innerHTML = `
        Photo by
        <a href="${article.imageCredit.photographerUrl}">${article.imageCredit.photographer}</a>
        on
        <a href="${article.imageCredit.photoUrl}">Unsplash</a>
      `;
    } else {
      imageCreditEl.innerHTML = "";
    }

    bodyEl.innerHTML = article.body;

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("is-open"), 10);
  });
});

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
