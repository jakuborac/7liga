const searchToggle = document.querySelector(".search-toggle");
const searchControl = document.querySelector(".search-control");
const primaryNav = document.querySelector(".primary-nav");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");
const searchHint = document.querySelector("#search-hint");
const searchResults = document.querySelector("#search-results");
const favoritesList = document.querySelector("#favorites-list");
const favoritesEmpty = document.querySelector("#favorites-empty");
const message = document.querySelector(".interaction-message");
const favoritesStorageKey = "7liga-favorites";
const typeLabels = {
  article: "Článok",
  player: "Hráč",
  club: "Klub",
  result: "Výsledok",
};
const searchRecords = [...document.querySelectorAll("[data-search-item]")]
  .map((element) => {
    const title = element.dataset.searchTitle || element.querySelector("h2, h3")?.textContent.trim() || "";
    const type = element.dataset.searchType || "content";
    const href = element.dataset.searchHref || (element.id ? `#${element.id}` : element.querySelector("a[href]")?.getAttribute("href")) || "#";
    const terms = [title, element.dataset.searchDescription, element.dataset.searchKeywords]
      .filter(Boolean)
      .join(" ");

    return { title, type, href, searchText: normalizeText(terms) };
  })
  .filter((record) => record.title);
let messageTimer;

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("sk");
}

function getLocalHref(value) {
  try {
    const url = new URL(value, window.location.href);
    return url.origin === window.location.origin ? url.href : null;
  } catch {
    return null;
  }
}

function readFavorites() {
  try {
    const favorites = JSON.parse(localStorage.getItem(favoritesStorageKey) || "[]");
    return Array.isArray(favorites) ? favorites : [];
  } catch {
    return [];
  }
}

function writeFavorites(favorites) {
  try {
    localStorage.setItem(favoritesStorageKey, JSON.stringify(favorites));
    return true;
  } catch {
    showMessage("Obľúbené sa nepodarilo uložiť.");
    return false;
  }
}

function renderFavorites() {
  if (!favoritesList || !favoritesEmpty) {
    return;
  }

  const favorites = readFavorites().filter((favorite) =>
    favorite &&
    (favorite.type === "club" || favorite.type === "player") &&
    typeof favorite.title === "string" &&
    favorite.title.trim() &&
    getLocalHref(favorite.href),
  );

  favoritesList.replaceChildren();
  favoritesEmpty.hidden = favorites.length > 0;
  favoritesList.hidden = favorites.length === 0;

  favorites.forEach((favorite) => {
    const item = document.createElement("li");
    const entry = document.createElement("div");
    const type = document.createElement("span");
    const link = document.createElement("a");
    const removeButton = document.createElement("button");

    item.className = "favorite-item";
    entry.className = "favorite-entry";
    type.className = "favorite-entry-type";
    type.textContent = favorite.type === "club" ? "Klub" : "Hráč";
    link.className = "favorite-entry-link";
    link.href = getLocalHref(favorite.href);
    link.textContent = favorite.title.trim();
    removeButton.className = "favorite-remove";
    removeButton.type = "button";
    removeButton.textContent = "Odstrániť";
    removeButton.addEventListener("click", () => {
      const remainingFavorites = readFavorites().filter((saved) =>
        saved.type !== favorite.type || saved.href !== favorite.href,
      );
      writeFavorites(remainingFavorites);
      renderFavorites();
    });

    entry.append(type, link);
    item.append(entry, removeButton);
    favoritesList.append(item);
  });
}

function showMessage(text) {
  message.textContent = text;
  message.classList.add("is-visible");
  window.clearTimeout(messageTimer);
  messageTimer = window.setTimeout(() => {
    message.classList.remove("is-visible");
  }, 2600);
}

renderFavorites();

function showSearchMessage(text) {
  searchResults.replaceChildren();
  const item = document.createElement("li");
  item.className = "search-message";
  item.textContent = text;
  searchResults.append(item);
}

function renderSearchResults(value) {
  const terms = normalizeText(value).trim().split(/\s+/).filter(Boolean);
  searchResults.replaceChildren();
  searchHint.hidden = terms.length > 0;

  if (!terms.length) {
    return;
  }

  const matches = searchRecords
    .filter((record) => terms.every((term) => record.searchText.includes(term)))
    .slice(0, 8);

  if (!matches.length) {
    showSearchMessage("Nenašli sa žiadne výsledky.");
    return;
  }

  matches.forEach((record) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const type = document.createElement("span");
    const title = document.createElement("span");

    item.className = "search-result";
    link.className = "search-result-link";
    link.href = record.href;
    type.className = "search-result-type";
    type.textContent = typeLabels[record.type] || "Obsah";
    title.textContent = record.title;
    link.append(type, title);
    link.addEventListener("click", () => closeSearch());
    item.append(link);
    searchResults.append(item);
  });
}

function closeSearch(restoreFocus = false) {
  searchPanel.hidden = true;
  searchControl.classList.remove("is-open");
  primaryNav.classList.remove("search-open");
  searchToggle.setAttribute("aria-expanded", "false");
  searchInput.value = "";
  renderSearchResults("");

  if (restoreFocus) {
    searchToggle.focus();
  }
}

searchToggle.addEventListener("click", () => {
  const isOpen = searchToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeSearch();
  } else {
    searchControl.classList.add("is-open");
    primaryNav.classList.add("search-open");
    searchToggle.setAttribute("aria-expanded", "true");
    searchPanel.hidden = false;
    renderSearchResults("");
    searchInput.focus();
  }
});

searchInput.addEventListener("input", (event) => {
  renderSearchResults(event.currentTarget.value);
});

document.addEventListener("pointerdown", (event) => {
  if (!searchPanel.hidden && !searchPanel.contains(event.target) && !searchToggle.contains(event.target)) {
    closeSearch();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchPanel.hidden) {
    closeSearch(true);
  }
});

document.querySelectorAll("[data-demo-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (link.classList.contains("login-button")) {
      showMessage("Prihlásenie zatiaľ nie je dostupné.");
    } else if (link.classList.contains("footer-contact")) {
      showMessage("Kontaktné údaje zatiaľ nie sú dostupné.");
    } else if (link.classList.contains("article-link")) {
      showMessage("Detail článku zatiaľ nie je dostupný.");
    } else if (link.textContent.trim() === "HRÁČI") {
      showMessage("Sekcia hráčov zatiaľ nie je dostupná.");
    } else {
      showMessage("Výsledky zatiaľ nie sú dostupné.");
    }
  });
});

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-add-favorite]") : null;

  if (!target) {
    return;
  }

  const type = target.dataset.favoriteType;
  const title = target.dataset.favoriteTitle?.trim();
  const href = getLocalHref(target.dataset.favoriteHref);

  if ((type !== "club" && type !== "player") || !title || !href) {
    showMessage("Túto položku sa nepodarilo pridať medzi obľúbené.");
    return;
  }

  const favorites = readFavorites();
  const alreadySaved = favorites.some((favorite) => favorite.type === type && getLocalHref(favorite.href) === href);

  if (!alreadySaved && writeFavorites([...favorites, { type, title, href }])) {
    renderFavorites();
    target.setAttribute("aria-pressed", "true");
    showMessage("Pridané medzi obľúbené.");
  } else if (alreadySaved) {
    showMessage("Táto položka už je medzi obľúbenými.");
  }
});