(function () {
  const galleryEl = document.getElementById("gallery");
  const filtersEl = document.getElementById("filters");
  const emptyMsg = document.getElementById("empty-msg");
  const langSwitch = document.getElementById("lang-switch");

  let activeCat = "all";
  let lang = localStorage.getItem("portfolio-lang") || "en";

  // ===== Language switch =====
  langSwitch.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem("portfolio-lang", lang);
      langSwitch
        .querySelectorAll("button")
        .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
      applyTranslations();
      renderFilters();
      renderGallery();
    });
  });

  document.documentElement.lang = lang;

  function applyTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });
  }

  // ===== Filters =====
  function renderFilters() {
    filtersEl.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat.id === activeCat ? " active" : "");
      btn.textContent = cat[lang];
      btn.dataset.cat = cat.id;
      btn.addEventListener("click", () => {
        activeCat = cat.id;
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.toggle("active", b.dataset.cat === cat.id));
        renderGallery();
      });
      filtersEl.appendChild(btn);
    });
  }

  // ===== Gallery =====
  function renderGallery() {
    galleryEl.innerHTML = "";
    const items = PROJECTS.filter(
      (p) => activeCat === "all" || p.cats.includes(activeCat)
    );
    emptyMsg.style.display = items.length ? "none" : "block";

    items.forEach((proj) => {
      const card = document.createElement("article");
      card.className = "card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      const title = lang === "ru" ? proj.titleRu : proj.titleEn;
      card.setAttribute("aria-label", title);

      const media = document.createElement("div");
      media.className = "card-media";

      if (proj.type === "video") {
        const img = document.createElement("img");
        img.src = "assets/" + proj.poster;
        img.loading = "lazy";
        img.alt = title;
        media.appendChild(img);

        const play = document.createElement("div");
        play.className = "play-icon";
        play.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        media.appendChild(play);
      } else {
        const img = document.createElement("img");
        img.src = "assets/img/" + proj.cover;
        img.loading = "lazy";
        img.alt = title;
        media.appendChild(img);

        if (proj.images.length > 1) {
          const count = document.createElement("div");
          count.className = "count";
          count.textContent = proj.images.length + " " + I18N[lang].photos_word;
          media.appendChild(count);
        }
      }

      const body = document.createElement("div");
      body.className = "card-body";

      const titleEl = document.createElement("h3");
      titleEl.className = "card-title";
      titleEl.textContent = title;

      const tags = document.createElement("div");
      tags.className = "card-tags";
      proj.cats.forEach((c) => {
        const cat = CATEGORIES.find((x) => x.id === c);
        if (cat) {
          const span = document.createElement("span");
          span.textContent = cat[lang];
          tags.appendChild(span);
        }
      });

      body.appendChild(titleEl);
      body.appendChild(tags);
      card.appendChild(media);
      card.appendChild(body);

      const open = () => openLightbox(proj);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });

      galleryEl.appendChild(card);
    });
  }

  // ===== Lightbox =====
  const lightbox = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  const titleEl = document.getElementById("lightbox-title");
  const counterEl = document.getElementById("lightbox-counter");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let currentProj = null;
  let currentIdx = 0;

  function openLightbox(proj) {
    currentProj = proj;
    currentIdx = 0;
    lightbox.classList.add("open");
    render();
  }

  function render() {
    stage.querySelectorAll("img, video").forEach((el) => el.remove());
    const title = lang === "ru" ? currentProj.titleRu : currentProj.titleEn;

    if (currentProj.type === "video") {
      const video = document.createElement("video");
      video.src = "assets/" + currentProj.video;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.poster = "assets/" + currentProj.poster;
      stage.appendChild(video);
      titleEl.textContent = title;
      counterEl.textContent = I18N[lang].video_word;
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      const img = document.createElement("img");
      img.src = "assets/img/" + currentProj.images[currentIdx];
      img.alt = title;
      stage.appendChild(img);
      titleEl.textContent = title;
      counterEl.textContent = (currentIdx + 1) + " / " + currentProj.images.length;
      const multi = currentProj.images.length > 1;
      prevBtn.style.display = multi ? "flex" : "none";
      nextBtn.style.display = multi ? "flex" : "none";
    }
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    stage.querySelectorAll("video").forEach((v) => v.pause());
  }

  function step(dir) {
    if (!currentProj || currentProj.type === "video") return;
    const len = currentProj.images.length;
    currentIdx = (currentIdx + dir + len) % len;
    render();
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  applyTranslations();
  renderFilters();
  renderGallery();
})();
