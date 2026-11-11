const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#article-search");
const articleItems = [...document.querySelectorAll("[data-article]")];
const emptySearch = document.querySelector(".empty-search");
const message = document.querySelector(".interaction-message");
let messageTimer;

function showMessage(text) {
  message.textContent = text;
  message.classList.add("is-visible");
  window.clearTimeout(messageTimer);
  messageTimer = window.setTimeout(() => {
    message.classList.remove("is-visible");
  }, 2600);
}

searchToggle.addEventListener("click", () => {
  const isExpanded = searchToggle.getAttribute("aria-expanded") === "true";
  searchToggle.setAttribute("aria-expanded", String(!isExpanded));
  searchPanel.hidden = isExpanded;

  if (!isExpanded) {
    searchInput.focus();
  } else {
    searchInput.value = "";
    articleItems.forEach((article) => {
      article.hidden = false;
    });
    emptySearch.hidden = true;
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("sk");
  let visibleCount = 0;

  articleItems.forEach((article) => {
    const matches = article.textContent.toLocaleLowerCase("sk").includes(query);
    article.hidden = !matches;
    visibleCount += Number(matches);
  });

  emptySearch.hidden = visibleCount > 0;
});

document.querySelector(".favorite-button").addEventListener("click", (event) => {
  const favoriteButton = event.currentTarget;
  const isFavorite = favoriteButton.getAttribute("aria-pressed") === "true";
  favoriteButton.setAttribute("aria-pressed", String(!isFavorite));
  showMessage(isFavorite ? "Odstránené z obľúbených." : "Pridané do obľúbených.");
});

document.querySelectorAll("[data-demo-link]:not(.favorite-button)").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (link.classList.contains("login-button")) {
      showMessage("Prihlásenie zatiaľ nie je dostupné.");
    } else if (link.classList.contains("article-link")) {
      showMessage("Detail článku zatiaľ nie je dostupný.");
    } else if (link.textContent.trim() === "HRÁČI") {
      showMessage("Sekcia hráčov zatiaľ nie je dostupná.");
    } else {
      showMessage("Výsledky zatiaľ nie sú dostupné.");
    }
  });
});