const searchToggle = document.querySelector(".search-toggle");
const searchControl = document.querySelector(".search-control");
const primaryNav = document.querySelector(".primary-nav");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");
const searchHint = document.querySelector("#search-hint");
const searchResults = document.querySelector("#search-results");
const favoritesList = document.querySelector("#favorites-list");
const favoritesEmpty = document.querySelector("#favorites-empty");
const articleClubFilter = document.querySelector("#article-club-filter");
const articleSeasonFilter = document.querySelector("#article-season-filter");
const articleFilterEmpty = document.querySelector("#article-filter-empty");
const roundFilter = document.querySelector("#round-filter");
const matchRoundSections = [...document.querySelectorAll("[data-round-section]")];
const matchDialog = document.querySelector("#match-dialog");
const matchDetailRound = document.querySelector("#match-detail-round");
const matchDetailBody = document.querySelector("#match-detail-body");
const matchDialogClose = document.querySelector(".match-dialog-close");
const contactForm = document.querySelector("#contact-form");
const message = document.querySelector(".interaction-message");
const favoritesStorageKey = "7liga-favorites";
const usersStorageKey = "users";
const currentUserStorageKey = "currentUser";
const scriptUrl = document.currentScript?.src
  || document.querySelector('script[src$="script.js"]')?.src
  || new URL("script.js", document.baseURI).href;
const siteRoot = new URL(".", scriptUrl);
const typeLabels = {
  article: "Článok",
  player: "Hráč",
  club: "Klub",
  result: "Výsledok",
};
const matchTeams = {
  "tatran-lev": {
    name: "FC Tatran Lev",
    logo: "img/kluby/tatran_lev-removebg-preview.png",
    href: "kluby/tatran-lev.html",
    region: "Vysoké Tatry",
    nickname: "Tatranskí levy",
    roster: [
      { number: "1", name: "Marek Kováč", position: "Brankár" },
      { number: "4", name: "Jakub Varga", position: "Obranca" },
      { number: "5", name: "Tomáš Horváth", position: "Obranca" },
      { number: "14", name: "Lukáš Baláž", position: "Obranca" },
      { number: "8", name: "Martin Tóth", position: "Stredopoliar" },
      { number: "10", name: "Filip Nagy", position: "Stredopoliar" },
      { number: "17", name: "Patrik Molnár", position: "Stredopoliar" },
      { number: "9", name: "Dávid Szabó", position: "Útočník" },
      { number: "11", name: "Samuel Polák", position: "Útočník" },
    ],
    scorers: ["Dávid Szabó", "Samuel Polák", "Filip Nagy", "Martin Tóth", "Patrik Molnár"],
    cardPlayers: ["Tomáš Horváth", "Jakub Varga", "Lukáš Baláž"],
  },
  "karpaty-vlci": {
    name: "SK Karpaty Vlci",
    logo: "img/kluby/karpaty-removebg-preview.png",
    href: "kluby/karpaty-vlci.html",
    region: "Karpatská oblasť",
    nickname: "Vlci z Karpát",
    roster: [
      { number: "1", name: "Michal Kučera", position: "Brankár" },
      { number: "2", name: "Peter Hudák", position: "Obranca" },
      { number: "6", name: "Andrej Šimko", position: "Obranca" },
      { number: "15", name: "Matúš Kollár", position: "Obranca" },
      { number: "7", name: "Adam Gál", position: "Stredopoliar" },
      { number: "10", name: "Dominik Oravec", position: "Stredopoliar" },
      { number: "20", name: "Kristián Benko", position: "Stredopoliar" },
      { number: "9", name: "Juraj Blaho", position: "Útočník" },
      { number: "19", name: "Erik Zeman", position: "Útočník" },
    ],
    scorers: ["Juraj Blaho", "Erik Zeman", "Dominik Oravec", "Adam Gál", "Kristián Benko"],
    cardPlayers: ["Andrej Šimko", "Matúš Kollár", "Peter Hudák"],
  },
  "nitra-corgon": {
    name: "AC Nitra Corgoň",
    logo: "img/kluby/corgon-removebg-preview.png",
    href: "kluby/nitra-corgon.html",
    region: "Nitra",
    nickname: "Corgoňovci",
    roster: [
      { number: "12", name: "Roman Kráľ", position: "Brankár" },
      { number: "3", name: "Štefan Bartoš", position: "Obranca" },
      { number: "4", name: "Oliver Dudáš", position: "Obranca" },
      { number: "16", name: "Richard Takáč", position: "Obranca" },
      { number: "8", name: "Matej Urban", position: "Stredopoliar" },
      { number: "10", name: "Boris Hruška", position: "Stredopoliar" },
      { number: "22", name: "Alexej Černý", position: "Stredopoliar" },
      { number: "9", name: "Viktor Valent", position: "Útočník" },
      { number: "18", name: "Denis Sýkora", position: "Útočník" },
    ],
    scorers: ["Viktor Valent", "Denis Sýkora", "Boris Hruška", "Matej Urban", "Alexej Černý"],
    cardPlayers: ["Štefan Bartoš", "Richard Takáč", "Oliver Dudáš"],
  },
  "dynamo-blesk": {
    name: "TJ Dynamo Blesk",
    logo: "img/kluby/blesk-removebg-preview.png",
    href: "kluby/dynamo-blesk.html",
    region: "Stredné Slovensko",
    nickname: "Blesky",
    roster: [
      { number: "1", name: "Branislav Majer", position: "Brankár" },
      { number: "5", name: "Ján Kmeť", position: "Obranca" },
      { number: "13", name: "Róbert Farkaš", position: "Obranca" },
      { number: "21", name: "Daniel Gajdoš", position: "Obranca" },
      { number: "6", name: "Ondrej Lacko", position: "Stredopoliar" },
      { number: "8", name: "Sebastián Pál", position: "Stredopoliar" },
      { number: "10", name: "Miroslav Kováčik", position: "Stredopoliar" },
      { number: "9", name: "Adrián Chovan", position: "Útočník" },
      { number: "14", name: "Nicolas Mlynár", position: "Útočník" },
    ],
    scorers: ["Adrián Chovan", "Nicolas Mlynár", "Miroslav Kováčik", "Sebastián Pál", "Ondrej Lacko"],
    cardPlayers: ["Róbert Farkaš", "Daniel Gajdoš", "Ján Kmeť"],
  },
  "topol-orly": {
    name: "FC Topoľ Orly",
    logo: "img/kluby/orly.png",
    href: "kluby/topol-orly.html",
    region: "Podunajsko",
    nickname: "Orly z Topoľa",
    roster: [
      { number: "30", name: "Pavol Sloboda", position: "Brankár" },
      { number: "2", name: "Norbert Fehér", position: "Obranca" },
      { number: "4", name: "Tibor Vlk", position: "Obranca" },
      { number: "15", name: "Kevin Meszároš", position: "Obranca" },
      { number: "7", name: "Damián Holub", position: "Stredopoliar" },
      { number: "10", name: "Radoslav Juhász", position: "Stredopoliar" },
      { number: "17", name: "Tobias Straka", position: "Stredopoliar" },
      { number: "9", name: "Nikolas Švec", position: "Útočník" },
      { number: "11", name: "Maroš Bílek", position: "Útočník" },
    ],
    scorers: ["Nikolas Švec", "Maroš Bílek", "Radoslav Juhász", "Damián Holub", "Tobias Straka"],
    cardPlayers: ["Tibor Vlk", "Norbert Fehér", "Kevin Meszároš"],
  },
  "horal-hrad": {
    name: "ŠK Horal Hrad",
    logo: "img/kluby/horal-removebg-preview.png",
    href: "kluby/horal-hrad.html",
    region: "Považie / Orava",
    nickname: "Hradní páni",
    roster: [
      { number: "1", name: "Vladimír Baran", position: "Brankár" },
      { number: "3", name: "Stanislav Kováč", position: "Obranca" },
      { number: "5", name: "Igor Paška", position: "Obranca" },
      { number: "12", name: "Ľuboš Dubovský", position: "Obranca" },
      { number: "8", name: "Marián Hlinka", position: "Stredopoliar" },
      { number: "10", name: "František Moravčík", position: "Stredopoliar" },
      { number: "16", name: "Gabriel Žák", position: "Stredopoliar" },
      { number: "9", name: "Milan Štefánik", position: "Útočník" },
      { number: "23", name: "René Janík", position: "Útočník" },
    ],
    scorers: ["Milan Štefánik", "René Janík", "František Moravčík", "Marián Hlinka", "Gabriel Žák"],
    cardPlayers: ["Igor Paška", "Stanislav Kováč", "Ľuboš Dubovský"],
  },
  "vulkan-ruda": {
    name: "ŠK Vulkán Ruda",
    logo: "img/kluby/vulkan-removebg-preview.png",
    href: "kluby/vulkan-ruda.html",
    region: "Banská Štiavnica / Kremnica",
    nickname: "Baníci / Sopky",
    roster: [
      { number: "1", name: "Dušan Rusnák", position: "Brankár" },
      { number: "4", name: "Jaroslav Kováč", position: "Obranca" },
      { number: "6", name: "Marcel Danko", position: "Obranca" },
      { number: "19", name: "Kamil Sedlák", position: "Obranca" },
      { number: "8", name: "Zdenko Pastorek", position: "Stredopoliar" },
      { number: "10", name: "Anton Nemec", position: "Stredopoliar" },
      { number: "15", name: "Roland Kubík", position: "Stredopoliar" },
      { number: "9", name: "Vincent Hrubý", position: "Útočník" },
      { number: "21", name: "Leoš Malý", position: "Útočník" },
    ],
    scorers: ["Vincent Hrubý", "Leoš Malý", "Zdenko Pastorek", "Anton Nemec", "Roland Kubík"],
    cardPlayers: ["Marcel Danko", "Kamil Sedlák", "Jaroslav Kováč"],
  },
  "druzstevnik-klas": {
    name: "TJ Družstevník Klas",
    logo: "img/kluby/klaś-removebg-preview.png",
    href: "kluby/druzstevnik-klas.html",
    region: "Žitný ostrov",
    nickname: "Klasári",
    roster: [
      { number: "1", name: "Jozef Kováč", position: "Brankár" },
      { number: "2", name: "Ladislav Papp", position: "Obranca" },
      { number: "5", name: "Karol Végh", position: "Obranca" },
      { number: "14", name: "Imrich Szilágyi", position: "Obranca" },
      { number: "7", name: "Attila Kiss", position: "Stredopoliar" },
      { number: "10", name: "Zoltán Németh", position: "Stredopoliar" },
      { number: "18", name: "Csaba Varga", position: "Stredopoliar" },
      { number: "9", name: "Gábor Molnár", position: "Útočník" },
      { number: "11", name: "Tamás Horváth", position: "Útočník" },
    ],
    scorers: ["Gábor Molnár", "Tamás Horváth", "Csaba Varga", "Attila Kiss", "Zoltán Németh"],
    cardPlayers: ["Karol Végh", "Ladislav Papp", "Imrich Szilágyi"],
  },
};
const round14MatchDetails = {
  "r14-1": {
    halftime: "1 : 1",
    events: [
      { minute: 14, minuteLabel: "14'", type: "goal", team: "tatran-lev", player: "Dávid Szabó", score: "1:0" },
      { minute: 33, minuteLabel: "33'", type: "goal", team: "karpaty-vlci", player: "Juraj Blaho", score: "1:1" },
      { minute: 41, minuteLabel: "41'", type: "yellow", team: "karpaty-vlci", player: "Andrej Šimko" },
      { minute: 61, minuteLabel: "61'", type: "goal", team: "tatran-lev", player: "Samuel Polák", score: "2:1" },
      { minute: 75, minuteLabel: "75'", type: "yellow", team: "tatran-lev", player: "Tomáš Horváth" },
      { minute: 84, minuteLabel: "84'", type: "goal", team: "tatran-lev", player: "Dávid Szabó", score: "3:1" },
    ],
  },
  "r14-2": {
    halftime: "1 : 0",
    events: [
      { minute: 28, minuteLabel: "28'", type: "goal", team: "nitra-corgon", player: "Viktor Valent", score: "1:0" },
      { minute: 52, minuteLabel: "52'", type: "yellow", team: "dynamo-blesk", player: "Róbert Farkaš" },
      { minute: 79, minuteLabel: "79'", type: "goal", team: "nitra-corgon", player: "Boris Hruška", score: "2:0" },
      { minute: 88, minuteLabel: "88'", type: "red", team: "dynamo-blesk", player: "Daniel Gajdoš" },
    ],
  },
  "r14-3": {
    halftime: "0 : 1",
    events: [
      { minute: 19, minuteLabel: "19'", type: "goal", team: "horal-hrad", player: "Milan Štefánik", score: "0:1" },
      { minute: 37, minuteLabel: "37'", type: "yellow", team: "horal-hrad", player: "Igor Paška" },
      { minute: 64, minuteLabel: "64'", type: "goal", team: "topol-orly", player: "Nikolas Švec", score: "1:1" },
      { minute: 71, minuteLabel: "71'", type: "yellow", team: "topol-orly", player: "Tibor Vlk" },
      { minute: 91, minuteLabel: "90+1'", type: "goal", team: "topol-orly", player: "Radoslav Juhász", score: "2:1" },
    ],
  },
  "r14-4": {
    halftime: "1 : 0",
    events: [
      { minute: 22, minuteLabel: "22'", type: "goal", team: "vulkan-ruda", player: "Vincent Hrubý", score: "1:0" },
      { minute: 44, minuteLabel: "44'", type: "yellow", team: "vulkan-ruda", player: "Marcel Danko" },
      { minute: 59, minuteLabel: "59'", type: "yellow", team: "druzstevnik-klas", player: "Karol Végh" },
      { minute: 68, minuteLabel: "68'", type: "goal", team: "druzstevnik-klas", player: "Gábor Molnár", score: "1:1" },
      { minute: 82, minuteLabel: "82'", type: "red", team: "vulkan-ruda", player: "Zdenko Pastorek" },
    ],
  },
};
let matchesData = [];
let searchRecords = [];
let messageTimer;

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("sk");
}

function getSiteHref(value, base = siteRoot) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value, base);
    return url.origin === siteRoot.origin ? url.href : null;
  } catch {
    return null;
  }
}

const searchArticles = [
  {
    title: "Ako dopadlo miestne derby?",
    href: "clanok-derby.html",
    image: "img/fotky/zapas1.jpg",
    keywords: "derby zápas miestny",
  },
  {
    title: "Nové posily v lige",
    href: "clanok-posily.html",
    image: "img/fotky/bitka.jpg",
    keywords: "prestupy noví hráči kluby",
  },
  {
    title: "Najlepšie občerstvenie v našej lige",
    href: "clanok-obcerstvenie.html",
    image: "img/fotky/bufet1.jpg",
    keywords: "občerstvenie jedlo nápoje bufet",
  },
  {
    title: "Pred zápasom rozhoduje aj dobrá príprava",
    href: "clanok-priprava.html",
    image: "img/fotky/bitka.jpg",
    keywords: "tréning príprava tím zápas",
  },
  {
    title: "Fanúšikovia tvoria atmosféru na ihrisku",
    href: "clanok-fanusikovia.html",
    image: "img/fotky/zapas1.jpg",
    keywords: "fanúšikovia atmosféra diváci ihrisko",
  },
];

function buildSearchIndex() {
  const records = Object.values(matchTeams).flatMap((team) => {
    const teamHref = getSiteHref(team.href);
    const logo = getSiteHref(team.logo);
    const clubRecord = {
      title: team.name,
      type: "club",
      subtitle: `${typeLabels.club} • ${team.region}`,
      href: teamHref,
      image: logo,
      searchText: normalizeText([team.name, team.region, team.nickname].join(" ")),
    };
    const playerRecords = team.roster.map((player) => ({
      title: player.name,
      type: "player",
      subtitle: `${typeLabels.player} • ${team.name} · ${player.position}`,
      href: getSiteHref(`hrac.html?id=${getPlayerSlug(player.name)}`),
      image: logo,
      searchText: normalizeText([player.name, team.name, player.position, player.number].join(" ")),
    }));

    return [clubRecord, ...playerRecords];
  });
  const articleRecords = searchArticles.map((article) => ({
    title: article.title,
    type: "article",
    subtitle: typeLabels.article,
    href: getSiteHref(article.href),
    image: getSiteHref(article.image),
    searchText: normalizeText([article.title, article.keywords].join(" ")),
  }));

  searchRecords = [...records, ...articleRecords].filter((record) => record.href);
}

function getLocalHref(value) {
  try {
    const url = new URL(value, siteRoot);
    return url.origin === window.location.origin ? url.href : null;
  } catch {
    return null;
  }
}

function getFavoriteIdentity(type, title, href) {
  if (type === "club") {
    const club = Object.values(matchTeams).find((team) =>
      team.name === title ||
      getLocalHref(team.href) === getLocalHref(href) ||
      getLocalHref(team.href) === getLocalHref(`kluby/${href?.split("/").pop()}`),
    );
    return club ? `club:${getLocalHref(club.href)}` : `club:${getLocalHref(href)}`;
  }
  return `${type}:${getLocalHref(href)}`;
}

function normalizeFavorite(favorite) {
  if (!favorite || (favorite.type !== "club" && favorite.type !== "player") ||
      typeof favorite.title !== "string" || typeof favorite.href !== "string") {
    return null;
  }

  if (favorite.type === "club") {
    const club = Object.values(matchTeams).find((team) =>
      team.name === favorite.title ||
      getLocalHref(team.href) === getLocalHref(favorite.href) ||
      getLocalHref(team.href) === getLocalHref(`kluby/${favorite.href.split("/").pop()}`),
    );
    if (club) {
      return { ...favorite, href: getLocalHref(club.href) };
    }
  }

  const href = getLocalHref(favorite.href);
  return href ? { ...favorite, href } : null;
}

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(usersStorageKey) || "[]");
    if (!Array.isArray(users)) {
      showMessage("Údaje používateľov sa nepodarilo načítať.");
      return [];
    }

    return users.filter((user) =>
      user &&
      typeof user.nickname === "string" &&
      typeof user.email === "string" &&
      typeof user.password === "string",
    );
  } catch (error) {
    console.error("Údaje používateľov sa nepodarilo načítať.", error);
    showMessage("Údaje používateľov sa nepodarilo načítať.");
    return [];
  }
}

function writeUsers(users) {
  try {
    localStorage.setItem(usersStorageKey, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error("Údaje používateľov sa nepodarilo uložiť.", error);
    showMessage("Údaje používateľov sa nepodarilo uložiť.");
    return false;
  }
}

function getCurrentUser() {
  try {
    const storedUser = JSON.parse(localStorage.getItem(currentUserStorageKey) || "null");
    if (!storedUser || typeof storedUser.email !== "string") {
      return null;
    }

    return readUsers().find((user) => user.email.toLowerCase() === storedUser.email.toLowerCase()) || null;
  } catch (error) {
    console.error("Aktívneho používateľa sa nepodarilo načítať.", error);
    showMessage("Aktívneho používateľa sa nepodarilo načítať.");
    return null;
  }
}

function setCurrentUser(user) {
  try {
    localStorage.setItem(currentUserStorageKey, JSON.stringify({
      email: user.email,
      nickname: user.nickname,
    }));
    return true;
  } catch (error) {
    console.error("Prihlásenie sa nepodarilo uložiť.", error);
    showMessage("Prihlásenie sa nepodarilo uložiť.");
    return false;
  }
}

function ensureTestAccount() {
  const users = readUsers();
  const testEmail = "fanusik@liga.sk";

  if (users.some((user) => user.email.toLowerCase() === testEmail)) {
    return;
  }

  users.push({
    nickname: "Futbalový Fanúšik",
    email: testEmail,
    password: "123456",
    favorites: [],
  });
  writeUsers(users);
}

function migrateLegacyFavorites(user) {
  let legacyFavorites;

  try {
    const storedFavorites = localStorage.getItem(favoritesStorageKey);
    if (!storedFavorites) {
      return true;
    }

    legacyFavorites = JSON.parse(storedFavorites);
    if (!Array.isArray(legacyFavorites)) {
      throw new TypeError("Obľúbené položky nemajú platný formát.");
    }
  } catch (error) {
    console.error("Staršie obľúbené položky sa nepodarilo načítať.", error);
    showMessage("Staršie obľúbené položky sa nepodarilo preniesť.");
    return false;
  }

  const users = readUsers();
  const account = users.find((savedUser) => savedUser.email.toLowerCase() === user.email.toLowerCase());
  if (!account) {
    showMessage("Používateľský účet sa nepodarilo nájsť.");
    return false;
  }

  const favorites = Array.isArray(account.favorites) ? account.favorites : [];
  const combined = [];
  favorites.forEach((savedFavorite) => {
    const normalized = normalizeFavorite(savedFavorite);
    if (normalized && !combined.some((saved) =>
      getFavoriteIdentity(saved.type, saved.title, saved.href) ===
      getFavoriteIdentity(normalized.type, normalized.title, normalized.href),
    )) {
      combined.push(normalized);
    }
  });
  legacyFavorites.forEach((favorite) => {
    const normalized = normalizeFavorite(favorite);
    if (normalized && !combined.some((saved) =>
      getFavoriteIdentity(saved.type, saved.title, saved.href) ===
      getFavoriteIdentity(normalized.type, normalized.title, normalized.href),
    )) {
      combined.push(normalized);
    }
  });
  account.favorites = combined;

  if (!writeUsers(users)) {
    return false;
  }

  try {
    localStorage.removeItem(favoritesStorageKey);
    return true;
  } catch (error) {
    console.error("Staršie obľúbené položky sa nepodarilo odstrániť.", error);
    showMessage("Obľúbené položky sa preniesli, ale staré údaje sa nepodarilo odstrániť.");
    return false;
  }
}

function readFavorites() {
  const user = getCurrentUser();
  if (!user || !Array.isArray(user.favorites)) {
    return [];
  }

  const uniqueFavorites = [];
  user.favorites.forEach((favorite) => {
    const normalized = normalizeFavorite(favorite);
    if (normalized && !uniqueFavorites.some((saved) =>
      getFavoriteIdentity(saved.type, saved.title, saved.href) ===
      getFavoriteIdentity(normalized.type, normalized.title, normalized.href),
    )) {
      uniqueFavorites.push(normalized);
    }
  });
  return uniqueFavorites;
}

function writeFavorites(favorites) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showMessage("Pre ukladanie obľúbených klubov a hráčov sa musíš najprv prihlásiť.");
    return false;
  }

  const users = readUsers();
  const account = users.find((user) => user.email.toLowerCase() === currentUser.email.toLowerCase());
  if (!account) {
    showMessage("Používateľský účet sa nepodarilo nájsť.");
    return false;
  }

  const uniqueFavorites = [];
  favorites.forEach((favorite) => {
    const normalized = normalizeFavorite(favorite);
    if (normalized && !uniqueFavorites.some((saved) =>
      getFavoriteIdentity(saved.type, saved.title, saved.href) ===
      getFavoriteIdentity(normalized.type, normalized.title, normalized.href),
    )) {
      uniqueFavorites.push(normalized);
    }
  });
  account.favorites = uniqueFavorites;
  return writeUsers(users);
}

function createFavoriteItem(favorite) {
  const item = document.createElement("li");
  const entry = document.createElement("div");
  const logo = document.createElement("img");
  const link = document.createElement("a");
  const content = document.createElement("div");
  const removeButton = document.createElement("button");
  const club = favorite.type === "club"
    ? Object.values(matchTeams).find((team) => team.name === favorite.title)
    : Object.values(matchTeams).find((team) => team.name === favorite.club);

  item.className = "favorite-item";
  entry.className = "favorite-entry";
  logo.className = "favorite-entry-logo";
  logo.alt = club ? `Logo klubu ${club.name}` : "";
  logo.hidden = !club;
  if (club) {
    logo.src = club.logo;
  }
  link.className = "favorite-entry-link";
  link.href = getLocalHref(favorite.href);
  link.textContent = favorite.title.trim();
  content.className = "favorite-entry-content";
  content.append(link);

  if (favorite.type === "player") {
    const details = [
      favorite.club,
      favorite.number ? `#${favorite.number}` : "",
      favorite.position,
    ].filter((detail) => typeof detail === "string" && detail.trim());

    if (details.length) {
      const detailLine = document.createElement("span");
      detailLine.className = "favorite-entry-details";
      detailLine.textContent = details.join(" · ");
      content.append(detailLine);
    }
  }

  removeButton.className = "favorite-remove";
  removeButton.type = "button";
  removeButton.textContent = "Odstrániť";
  removeButton.addEventListener("click", () => {
    const remainingFavorites = readFavorites().filter((saved) =>
      !saved || getFavoriteIdentity(saved.type, saved.title, saved.href) !==
        getFavoriteIdentity(favorite.type, favorite.title, favorite.href),
    );
    if (writeFavorites(remainingFavorites)) {
      renderFavorites();
    }
  });

  entry.append(logo, content);
  item.append(entry, removeButton);
  return item;
}

function renderFavoriteList(list, empty, favorites) {
  if (!list || !empty) {
    return;
  }

  list.replaceChildren(...favorites.map(createFavoriteItem));
  empty.hidden = favorites.length > 0;
  list.hidden = favorites.length === 0;
}

function renderFavorites() {
  const signedIn = Boolean(getCurrentUser());
  const favorites = readFavorites().filter((favorite) =>
    favorite &&
    (favorite.type === "club" || favorite.type === "player") &&
    typeof favorite.title === "string" &&
    favorite.title.trim() &&
    getLocalHref(favorite.href),
  );

  renderFavoriteList(favoritesList, favoritesEmpty, favorites);
  if (favoritesEmpty) {
    favoritesEmpty.textContent = signedIn
      ? "Zatiaľ tu nemáš žiadne obľúbené kluby ani hráčov."
      : "Prihlás sa, aby si si mohol ukladať obľúbené kluby a hráčov.";
  }
}

function updateAccountNavigation() {
  const user = getCurrentUser();
  const relativePath = window.location.pathname.includes("/kluby/") ? "../" : "";

  document.querySelectorAll("[data-auth-link]").forEach((link) => {
    link.href = `${relativePath}${user ? "profil.html" : "prihlasenie.html"}`;
    link.textContent = user ? "PROFIL" : "PRIHLÁSIŤ SA";
    link.setAttribute("aria-label", user ? `Profil používateľa ${user.nickname}` : "Prihlásiť sa");
  });
}

function renderProfile() {
  const user = getCurrentUser();
  const accountSection = document.querySelector("#profile-account");
  const signInNotice = document.querySelector("#profile-sign-in-notice");

  if (!accountSection || !signInNotice) {
    return;
  }

  accountSection.hidden = !user;
  signInNotice.hidden = Boolean(user);

  if (user) {
    document.querySelector("#profile-nickname").textContent = user.nickname;
    document.querySelector("#profile-email").textContent = user.email;
  }
}

function setupAuthentication() {
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  const authHeading = document.querySelector("#auth-heading");
  const authFeedback = document.querySelector("#auth-feedback");
  const modeButtons = [...document.querySelectorAll("[data-auth-mode]")];

  if (loginForm && registerForm && authHeading && authFeedback) {
    const setMode = (mode) => {
      const isLogin = mode === "login";
      loginForm.hidden = !isLogin;
      registerForm.hidden = isLogin;
      authHeading.textContent = isLogin ? "PRIHLÁSENIE" : "REGISTRÁCIA";
      authFeedback.textContent = "";
      authFeedback.hidden = true;
      modeButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.authMode === mode));
      });
    };

    modeButtons.forEach((button) => {
      button.addEventListener("click", () => setMode(button.dataset.authMode));
    });

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const identifier = loginForm.querySelector("[name='identifier']").value.trim();
      const password = loginForm.querySelector("[name='password']").value;

      if (!identifier || !password) {
        authFeedback.textContent = "Vyplň prezývku alebo e-mail a heslo.";
        authFeedback.hidden = false;
        return;
      }

      const user = readUsers().find((savedUser) =>
        normalizeText(savedUser.email) === normalizeText(identifier) ||
        normalizeText(savedUser.nickname) === normalizeText(identifier),
      );

      if (!user || user.password !== password) {
        authFeedback.textContent = "Nesprávna prezývka, e-mail alebo heslo.";
        authFeedback.hidden = false;
        return;
      }

      if (!migrateLegacyFavorites(user) || !setCurrentUser(user)) {
        authFeedback.textContent = "Prihlásenie sa nepodarilo uložiť. Skús to znova.";
        authFeedback.hidden = false;
        return;
      }

      window.location.href = "profil.html";
    });

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nickname = registerForm.querySelector("[name='nickname']").value.trim();
      const email = registerForm.querySelector("[name='email']").value.trim().toLowerCase();
      const password = registerForm.querySelector("[name='password']").value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nickname || !email || !password) {
        authFeedback.textContent = "Vyplň prezývku, e-mail aj heslo.";
        authFeedback.hidden = false;
        return;
      }

      if (!emailPattern.test(email)) {
        authFeedback.textContent = "Zadaj platnú e-mailovú adresu.";
        authFeedback.hidden = false;
        return;
      }

      if (password.length < 6) {
        authFeedback.textContent = "Heslo musí mať aspoň 6 znakov.";
        authFeedback.hidden = false;
        return;
      }

      const users = readUsers();
      if (users.some((user) => user.email.toLowerCase() === email)) {
        authFeedback.textContent = "Účet s týmto e-mailom už existuje.";
        authFeedback.hidden = false;
        return;
      }

      if (users.some((user) => normalizeText(user.nickname) === normalizeText(nickname))) {
        authFeedback.textContent = "Táto prezývka sa už používa.";
        authFeedback.hidden = false;
        return;
      }

      const user = { nickname, email, password, favorites: [] };
      if (!writeUsers([...users, user]) || !migrateLegacyFavorites(user) || !setCurrentUser(user)) {
        authFeedback.textContent = "Registráciu sa nepodarilo dokončiť. Skús to znova.";
        authFeedback.hidden = false;
        return;
      }

      window.location.href = "profil.html";
    });

    setMode("login");
  }

  const logoutButton = document.querySelector("#profile-logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      try {
        localStorage.removeItem(currentUserStorageKey);
        window.location.href = "index.html";
      } catch (error) {
        console.error("Odhlásenie sa nepodarilo.", error);
        showMessage("Odhlásenie sa nepodarilo.");
      }
    });
  }
}

function setupContactForm() {
  if (!contactForm) {
    return;
  }

  const feedback = document.querySelector("#contact-form-feedback");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = contactForm.elements.namedItem("name").value.trim();
    const email = contactForm.elements.namedItem("email").value.trim();
    const body = contactForm.elements.namedItem("message").value.trim();

    feedback.classList.remove("is-error");
    if (!name || !email || !body) {
      feedback.textContent = "Vyplňte prosím všetky povinné polia.";
      feedback.hidden = false;
      feedback.classList.add("is-error");
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    contactForm.reset();
    feedback.textContent = "Ďakujeme! Vaša správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.";
    feedback.hidden = false;
  });
}

function setFavoriteButtonState(button, isFavorite) {
  const label = button.dataset.favoriteType === "club" ? "klub" : "hráča";
  const isMatchFavorite = button.classList.contains("match-team-favorite");
  const canRemove = button.dataset.favoriteType === "club";
  button.setAttribute("aria-pressed", String(isFavorite));
  button.disabled = isFavorite && !canRemove;
  button.setAttribute(
    "aria-label",
    isFavorite
      ? canRemove
        ? `Odobrať ${label} z obľúbených`
        : `${label === "klub" ? "Klub" : "Hráč"} je už medzi obľúbenými`
      : `Pridať ${label} medzi obľúbené`,
  );
}

function addRosterFavoriteButtons() {
  const club = document.querySelector(".club-profile-title h1")?.textContent.trim();

  if (!club) {
    return;
  }

  document.querySelectorAll("[data-player-row]").forEach((row) => {
    const [numberCell, nameCell, positionCell] = row.querySelectorAll("td");
    const number = numberCell?.textContent.trim();
    const title = nameCell?.textContent.trim();
    const position = positionCell?.textContent.trim();

    if (!number || !title || !position) {
      return;
    }
    const nameLink = document.createElement("a");
    nameLink.href = getLocalHref(`hrac.html?id=${getPlayerSlug(title)}`);
    nameLink.textContent = title;
    nameCell.replaceChildren(nameLink);

    const button = document.createElement("button");
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    button.className = "favorite-link player-favorite-button";
    button.type = "button";
    button.dataset.addFavorite = "";
    button.dataset.favoriteType = "player";
    button.dataset.favoriteTitle = title;
    button.dataset.favoriteHref = `hrac.html?id=${getPlayerSlug(title)}`;
    button.dataset.favoriteClub = club;
    button.dataset.favoritePosition = position;
    button.dataset.favoriteNumber = number;
    icon.setAttribute("class", "favorite-icon");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    path.setAttribute("d", "M20.4 8.7c0 4.8-7.4 9.7-8.1 10.1a.6.6 0 0 1-.6 0c-.7-.4-8.1-5.3-8.1-10.1a4.4 4.4 0 0 1 8.4-1.8 4.4 4.4 0 0 1 8.4 1.8Z");
    icon.append(path);
    button.append(icon);
    button.setAttribute("aria-pressed", "false");
    const favoriteCell = document.createElement("td");
    favoriteCell.className = "roster-favorite-cell";
    favoriteCell.append(button);
    row.append(favoriteCell);
  });
}

function getPlayerSlug(name) {
  return normalizeText(name)
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function linkStatisticPlayers(root = document) {
  root.querySelectorAll(".player-stat-player").forEach((player) => {
    if (player.querySelector(".player-stat-link")) {
      return;
    }

    const nameNode = [...player.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (!nameNode) {
      return;
    }

    const name = nameNode.textContent.trim();
    const link = document.createElement("a");
    link.className = "player-stat-link";
    link.href = getLocalHref(`hrac.html?id=${encodeURIComponent(getPlayerSlug(name))}`);
    link.textContent = name;
    nameNode.replaceWith(link);
  });
}

function showPlayerProfileError(text) {
  const error = document.querySelector("#player-profile-error");

  if (error) {
    error.textContent = text;
    error.hidden = false;
  }
}

function generateMatchStatistics(seed, homeScore, awayScore) {
  const homePossession = 44 + (seed % 13);
  const homeShots = Math.max(homeScore + 2, 8 + (seed % 8));
  const awayShots = Math.max(awayScore + 2, 7 + ((seed + 3) % 8));

  return {
    possession: { home: homePossession, away: 100 - homePossession, suffix: "%" },
    shots: { home: homeShots, away: awayShots, suffix: "" },
    shotsOnTarget: {
      home: Math.min(homeShots, Math.max(homeScore, 2 + (seed % 4))),
      away: Math.min(awayShots, Math.max(awayScore, 2 + ((seed + 2) % 4))),
      suffix: "",
    },
    corners: { home: 2 + (seed % 8), away: 2 + ((seed + 3) % 8), suffix: "" },
    fouls: { home: 7 + (seed % 10), away: 8 + ((seed + 4) % 10), suffix: "" },
  };
}

function initializeMatchRows() {
  document.querySelectorAll("[data-round-section]").forEach((section) => {
    const round = Number(section.dataset.roundSection);

    section.querySelectorAll(".match-row").forEach((row, index) => {
      const [homeElement, scoreElement, awayElement] = row.children;
      const homeName = homeElement.querySelector("span")?.textContent.trim();
      const awayName = awayElement.querySelector("span")?.textContent.trim();
      const homeTeamEntry = Object.entries(matchTeams).find(([, team]) => team.name === homeName);
      const awayTeamEntry = Object.entries(matchTeams).find(([, team]) => team.name === awayName);
      const [homeScore, awayScore] = scoreElement.textContent.split(":").map(Number);

      if (!homeTeamEntry || !awayTeamEntry || !Number.isInteger(homeScore) || !Number.isInteger(awayScore)) {
        console.error("Zápas nemá platné údaje tímov alebo skóre.", row);
        showMessage("Zápas sa nepodarilo pripraviť.");
        return;
      }

      const [homeTeamCode, homeTeam] = homeTeamEntry;
      const [awayTeamCode, awayTeam] = awayTeamEntry;
      const matchId = `r${round}-${index + 1}`;
      row.dataset.matchId = matchId;
      row.dataset.homeTeam = homeTeamCode;
      row.dataset.awayTeam = awayTeamCode;
      row.dataset.homeScore = String(homeScore);
      row.dataset.awayScore = String(awayScore);

      const createFavoriteButton = (team) => {
        const button = document.createElement("button");
        button.className = "favorite-link match-team-favorite";
        button.type = "button";
        button.dataset.addFavorite = "";
        button.dataset.favoriteType = "club";
        button.dataset.favoriteTitle = team.name;
        button.dataset.favoriteHref = team.href;
        button.setAttribute("aria-label", `Pridať klub ${team.name} medzi obľúbené`);
        button.setAttribute("aria-pressed", "false");
        return button;
      };

      homeElement.after(createFavoriteButton(homeTeam));
      awayElement.before(createFavoriteButton(awayTeam));

      const detailButton = document.createElement("button");
      detailButton.className = "match-detail-trigger";
      detailButton.type = "button";
      detailButton.dataset.matchId = matchId;
      detailButton.setAttribute(
        "aria-label",
        `Zobraziť detail ${round}. kola: ${homeTeam.name} ${homeScore} : ${awayScore} ${awayTeam.name}`,
      );
      row.append(detailButton);
    });
  });
}

function generateMatchEvents(match, seed) {
  const goalEvents = [];

  [[match.homeTeam, match.homeScore, 5], [match.awayTeam, match.awayScore, 19]].forEach(
    ([teamCode, goalCount, offset]) => {
      const team = matchTeams[teamCode];

      for (let goalIndex = 0; goalIndex < goalCount; goalIndex += 1) {
        const minute = 7 + ((seed * 11 + goalIndex * 23 + offset) % 83);
        const player = team.scorers[(seed + goalIndex) % team.scorers.length];
        goalEvents.push({ minute, minuteLabel: `${minute}'`, type: "goal", team: teamCode, player });
      }
    },
  );

  goalEvents.sort((first, second) => first.minute - second.minute);
  let homeGoals = 0;
  let awayGoals = 0;

  goalEvents.forEach((event) => {
    if (event.team === match.homeTeam) {
      homeGoals += 1;
    } else {
      awayGoals += 1;
    }

    event.score = `${homeGoals}:${awayGoals}`;
  });

  const cardEvents = Array.from({ length: 2 + (seed % 3) }, (_, index) => {
    const teamCode = index % 2 === 0 ? match.homeTeam : match.awayTeam;
    const team = matchTeams[teamCode];
    const minute = 12 + ((seed * 3 + index * 19) % 77);

    return {
      minute,
      minuteLabel: `${minute}'`,
      type: (seed + index) % 13 === 0 ? "red" : "yellow",
      team: teamCode,
      player: team.cardPlayers[(seed + index) % team.cardPlayers.length],
    };
  });
  const events = [...goalEvents, ...cardEvents].sort((first, second) => first.minute - second.minute);
  let halftimeHome = 0;
  let halftimeAway = 0;

  goalEvents.forEach((event) => {
    if (event.minute <= 45) {
      if (event.team === match.homeTeam) {
        halftimeHome += 1;
      } else {
        halftimeAway += 1;
      }
    }
  });

  return { events, halftime: `${halftimeHome} : ${halftimeAway}` };
}

function buildMatchesData() {
  return [...document.querySelectorAll(".match-row[data-match-id]")].map((row, index) => {
    const section = row.closest("[data-round-section]");
    const match = {
      id: row.dataset.matchId,
      round: Number(section.dataset.roundSection),
      homeTeam: row.dataset.homeTeam,
      awayTeam: row.dataset.awayTeam,
      homeScore: Number(row.dataset.homeScore),
      awayScore: Number(row.dataset.awayScore),
    };
    const seed = match.round * 31 + index * 17 + 1;
    const details = match.round === 14
      ? round14MatchDetails[match.id]
      : generateMatchEvents(match, seed);

    return {
      ...match,
      halftime: details.halftime,
      events: details.events,
      statistics: generateMatchStatistics(seed, match.homeScore, match.awayScore),
    };
  });
}

function addMatchFavoriteIcons() {
  document.querySelectorAll(".match-team-favorite").forEach((button) => {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    icon.setAttribute("class", "favorite-icon");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    path.setAttribute("d", "M20.4 8.7c0 4.8-7.4 9.7-8.1 10.1a.6.6 0 0 1-.6 0c-.7-.4-8.1-5.3-8.1-10.1a4.4 4.4 0 0 1 8.4-1.8 4.4 4.4 0 0 1 8.4 1.8Z");
    icon.append(path);
    button.append(icon);
  });
}

function createMatchTeamElement(teamCode, className) {
  const team = matchTeams[teamCode];
  const element = document.createElement("div");
  const logo = document.createElement("img");
  const name = document.createElement("span");
  element.className = className;
  logo.src = team.logo;
  logo.alt = "";
  name.textContent = team.name;
  element.append(logo, name);
  return element;
}

function createMatchEventList(match, teamCode) {
  const list = document.createElement("ol");
  list.className = "match-event-list";
  const events = match.events.filter((event) => event.team === teamCode);

  if (!events.length) {
    const empty = document.createElement("li");
    empty.textContent = "Bez udalostí";
    list.append(empty);
    return list;
  }

  events.forEach((event) => {
    const item = document.createElement("li");
    const time = document.createElement("time");
    const icon = document.createElement("span");
    const description = document.createElement("span");
    const iconByType = { goal: "⚽", yellow: "🟨", red: "🟥" };
    const labelByType = { goal: "Gól", yellow: "Žltá karta", red: "Červená karta" };
    item.className = "match-event";
    time.textContent = event.minuteLabel;
    icon.className = "match-event-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = iconByType[event.type];
    const prefix = document.createTextNode(`${labelByType[event.type]} – `);
    const playerLink = document.createElement("a");
    playerLink.href = getLocalHref(`hrac.html?id=${getPlayerSlug(event.player)}`);
    playerLink.className = "match-event-player";
    playerLink.textContent = event.player;
    const suffix = document.createTextNode(`${event.score ? ` (${event.score})` : ""}`);
    description.replaceChildren(prefix, playerLink, suffix);
    item.append(time, icon, description);
    list.append(item);
  });

  return list;
}

function createMatchEventsPanel(match) {
  const section = document.createElement("section");
  const heading = document.createElement("h3");
  const columns = document.createElement("div");
  section.className = "match-detail-section";
  heading.className = "match-detail-section-heading";
  heading.textContent = "GÓLY A KARTY";
  columns.className = "match-event-columns";

  [match.homeTeam, match.awayTeam].forEach((teamCode) => {
    const teamSection = document.createElement("div");
    const teamHeading = document.createElement("h4");
    teamSection.className = "match-event-team";
    teamHeading.textContent = matchTeams[teamCode].name;
    teamSection.append(teamHeading, createMatchEventList(match, teamCode));
    columns.append(teamSection);
  });

  section.append(heading, columns);
  return section;
}

function createMatchStatisticsPanel(match) {
  const section = document.createElement("section");
  const heading = document.createElement("h3");
  const rows = document.createElement("div");
  const labels = [
    ["possession", "Držanie lopty"],
    ["shots", "Strely celkom"],
    ["shotsOnTarget", "Strely na bránu"],
    ["corners", "Rohové kopy"],
    ["fouls", "Fauly"],
  ];
  section.className = "match-detail-section";
  heading.className = "match-detail-section-heading";
  heading.textContent = "ZÁKLADNÉ ŠTATISTIKY";
  rows.className = "match-stat-rows";

  labels.forEach(([key, label]) => {
    const values = match.statistics[key];
    const row = document.createElement("div");
    const valuesContainer = document.createElement("div");
    const homeValue = document.createElement("span");
    const statLabel = document.createElement("span");
    const awayValue = document.createElement("span");
    const bar = document.createElement("div");
    const homeBar = document.createElement("span");
    const awayBar = document.createElement("span");
    const total = values.home + values.away || 1;
    const homeShare = Math.round((values.home / total) * 100);
    row.className = "match-stat-row";
    const displayValue = (value) => `${value}${values.suffix}`;
    homeValue.textContent = displayValue(values.home);
    statLabel.textContent = label;
    awayValue.textContent = displayValue(values.away);
    valuesContainer.className = "match-stat-values";
    bar.className = "match-stat-bar";
    bar.setAttribute("aria-hidden", "true");
    homeBar.className = "match-stat-bar-home";
    awayBar.className = "match-stat-bar-away";
    homeBar.style.width = `${homeShare}%`;
    awayBar.style.width = `${100 - homeShare}%`;
    valuesContainer.append(homeValue, statLabel, awayValue);
    bar.append(homeBar, awayBar);
    row.append(valuesContainer, bar);
    rows.append(row);
  });

  section.append(heading, rows);
  return section;
}

function showMatchDetails(matchId) {
  const match = matchesData.find((candidate) => candidate.id === matchId);

  if (!match || !matchDialog || !matchDetailRound || !matchDetailBody) {
    showMessage("Detail zápasu sa nepodarilo zobraziť.");
    return;
  }

  const scoreboard = document.createElement("div");
  const score = document.createElement("div");
  const finalScore = document.createElement("strong");
  const halftime = document.createElement("span");
  scoreboard.className = "match-detail-scoreboard";
  score.className = "match-detail-final-score";
  finalScore.textContent = `${match.homeScore} : ${match.awayScore}`;
  halftime.textContent = `Polčas (${match.halftime})`;
  score.append(finalScore, halftime);
  scoreboard.append(
    createMatchTeamElement(match.homeTeam, "match-detail-team match-detail-team-home"),
    score,
    createMatchTeamElement(match.awayTeam, "match-detail-team match-detail-team-away"),
  );

  matchDetailRound.textContent = `${match.round}. KOLO`;
  matchDetailBody.replaceChildren(
    scoreboard,
    createMatchEventsPanel(match),
    createMatchStatisticsPanel(match),
  );
  matchDialog.showModal();
}

function initializeMatchDetails() {
  initializeMatchRows();
  matchesData = buildMatchesData();
  addMatchFavoriteIcons();

  document.querySelectorAll(".match-detail-trigger[data-match-id]").forEach((button) => {
    button.addEventListener("click", () => showMatchDetails(button.dataset.matchId));
  });

  if (matchDialog && matchDialogClose) {
    matchDialogClose.addEventListener("click", () => matchDialog.close());
    matchDialog.addEventListener("click", (event) => {
      if (event.target === matchDialog) {
        matchDialog.close();
      }
    });
  }
}

async function renderPlayerProfile() {
  const profileStats = document.querySelector("#player-profile-stats");

  if (!profileStats) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id") || params.get("player");

  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    showPlayerProfileError("Hráča sa nepodarilo nájsť.");
    return;
  }
  if (!window.LIGA_HRACI_DATA) {
    throw new Error("Databáza hráčov sa nepodarilo načítať.");
  }
  const player = window.LIGA_HRACI_DATA.getPlayer(slug);

  if (!player) {
    showPlayerProfileError("Hráča sa nepodarilo nájsť.");
    return;
  }

  const heading = document.querySelector("#player-profile-name");
  heading.textContent = player.name;
  document.title = `${player.name} | 7. Liga`;

  document.querySelector("#player-profile-number").textContent = `#${player.number}`;
  document.querySelector("#player-profile-position").textContent = player.position;
  const clubLink = document.querySelector("#player-profile-club");
  clubLink.href = getLocalHref(player.clubHref);
  document.querySelector("#player-profile-club-logo").src = getLocalHref(player.logo);
  document.querySelector("#player-profile-club-logo").alt = `Logo klubu ${player.club}`;
  document.querySelector("#player-profile-club-name").textContent = player.club;
  document.querySelector("#player-profile-age").textContent = `Vek: ${player.age} rokov`;
  document.querySelector("#player-profile-nationality").textContent =
    `Národnosť: ${player.nationality} ${player.flag}`;

  const favoriteButton = document.querySelector(".player-profile-favorite");
  favoriteButton.dataset.favoriteType = "player";
  favoriteButton.dataset.favoriteTitle = player.name;
  favoriteButton.dataset.favoriteHref = `hrac.html?id=${player.id}`;
  favoriteButton.dataset.favoriteClub = player.club;
  favoriteButton.dataset.favoritePosition = player.position;
  favoriteButton.dataset.favoriteNumber = player.number;

  const boxes = [
    ["Odohrané zápasy", `${player.stats.matches}`, ""],
    ["Odohrané minúty", `${player.stats.minutes.toLocaleString("sk-SK")}'`, ""],
    ["Góly", `${player.stats.goals}`, ""],
    ["Asistencie", `${player.stats.assists}`, ""],
    ["Žlté karty", `${player.stats.yellowCards}`, ""],
    ["Červené karty", `${player.stats.redCards}`, ""],
  ];
  if (player.position === "Brankár") {
    boxes.push(["Čisté kontá", `${player.stats.cleanSheets}`, ""]);
  }

  profileStats.replaceChildren(...boxes.map(([label, value]) => {
    const box = document.createElement("div");
    const valueNode = document.createElement("strong");
    const labelNode = document.createElement("span");
    box.className = "player-season-box";
    valueNode.textContent = value;
    labelNode.textContent = label;
    box.append(valueNode, labelNode);
    return box;
  }));
  syncFavoriteButtons();
}

function addFooterSponsors() {
  const sponsors = [
    { name: "TATRASTAV a.s.", icon: "TS", main: true },
    { name: "STAVEBNINY TEHLA & KROV s.r.o.", icon: "▧" },
    { name: "Karpatská Minerálka", icon: "◆" },
  ];

  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (footer.querySelector(".footer-sponsors")) {
      return;
    }

    const section = document.createElement("div");
    const heading = document.createElement("p");
    const list = document.createElement("div");
    section.className = "footer-sponsors";
    section.setAttribute("aria-label", "Partneri a sponzori ligy");
    heading.className = "footer-sponsors-heading";
    heading.textContent = "PARTNERI A SPONZORI LIGY";
    list.className = "footer-sponsor-list";

    sponsors.forEach((sponsor) => {
      const card = document.createElement("div");
      const icon = document.createElement("span");
      const name = document.createElement("span");
      card.className = `footer-sponsor-card${sponsor.main ? " footer-sponsor-card-main" : ""}`;
      icon.className = "footer-sponsor-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = sponsor.icon;
      name.textContent = sponsor.name;
      card.append(icon, name);
      list.append(card);
    });

    section.append(heading, list);
    const contact = footer.querySelector(".footer-contact");
    footer.insertBefore(section, contact || null);
  });
}

function syncFavoriteButtons() {
  const favorites = readFavorites();

  document.querySelectorAll("[data-add-favorite]").forEach((button) => {
    const type = button.dataset.favoriteType;
    const title = button.dataset.favoriteTitle?.trim();
    const href = getLocalHref(button.dataset.favoriteHref);
    const identity = getFavoriteIdentity(type, title, href);
    const isFavorite = favorites.some(
      (favorite) => favorite &&
        getFavoriteIdentity(favorite.type, favorite.title, favorite.href) === identity,
    );

    setFavoriteButtonState(button, isFavorite);
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

function filterArticles() {
  const selectedClub = articleClubFilter.value;
  const selectedSeason = articleSeasonFilter.value;
  let visibleArticles = 0;

  document.querySelectorAll("[data-article-filter-item]").forEach((article) => {
    const clubs = article.dataset.clubs.split(/\s+/);
    const matchesClub = selectedClub === "all" || clubs.includes(selectedClub);
    const matchesSeason = selectedSeason === "all" || article.dataset.season === selectedSeason;
    const isVisible = matchesClub && matchesSeason;

    article.hidden = !isVisible;
    visibleArticles += Number(isVisible);
  });

  articleFilterEmpty.hidden = visibleArticles > 0;
}

function filterMatchRounds() {
  const selectedRound = roundFilter.value;

  matchRoundSections.forEach((section) => {
    section.hidden = selectedRound !== "all" && section.dataset.roundSection !== selectedRound;
  });
}

addRosterFavoriteButtons();
linkStatisticPlayers();
initializeMatchDetails();
buildSearchIndex();
ensureTestAccount();
updateAccountNavigation();
renderFavorites();
renderProfile();
setupAuthentication();
setupContactForm();
addFooterSponsors();
syncFavoriteButtons();
renderPlayerProfile().catch((error) => {
  console.error(error);
  showPlayerProfileError("Štatistiky hráča sa nepodarilo načítať.");
});

if (articleClubFilter && articleSeasonFilter && articleFilterEmpty) {
  articleClubFilter.addEventListener("change", filterArticles);
  articleSeasonFilter.addEventListener("change", filterArticles);
  filterArticles();
}

if (roundFilter) {
  roundFilter.addEventListener("change", filterMatchRounds);
  filterMatchRounds();
}

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
  searchResults.hidden = terms.length === 0;
  searchHint.hidden = terms.length > 0;

  if (!terms.length) {
    return;
  }

  const matches = searchRecords
    .filter((record) => terms.every((term) => record.searchText.includes(term)));

  if (!matches.length) {
    showSearchMessage("Nenašli sa žiadne výsledky");
    return;
  }

  matches.forEach((record) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const content = document.createElement("span");
    const title = document.createElement("span");
    const subtitle = document.createElement("span");

    item.className = "search-result";
    link.className = "search-result-link";
    link.href = record.href;
    content.className = "search-result-content";
    title.className = "search-result-title";
    title.textContent = record.title;
    subtitle.className = "search-result-type";
    subtitle.textContent = record.subtitle || typeLabels[record.type] || "Obsah";
    content.append(title, subtitle);

    if (record.image) {
      const image = document.createElement("img");
      image.className = "search-result-image";
      image.src = record.image;
      image.alt = "";
      image.loading = "lazy";
      link.append(image);
    } else {
      const icon = document.createElement("span");
      icon.className = "search-result-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = record.type === "article" ? "Č" : record.type === "club" ? "K" : "H";
      link.append(icon);
    }

    link.append(content);
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

    if (link.classList.contains("photo-reports-button")) {
      showMessage("Fotoreporty zatiaľ nie sú dostupné.");
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

  if (!getCurrentUser()) {
    showMessage("Pre ukladanie obľúbených klubov a hráčov sa musíš najprv prihlásiť.");
    return;
  }

  const favorites = readFavorites();
  const alreadySaved = favorites.some(
    (favorite) => favorite &&
      getFavoriteIdentity(favorite.type, favorite.title, favorite.href) ===
      getFavoriteIdentity(type, title, href),
  );

  if (alreadySaved) {
    if (type === "club") {
      const remainingFavorites = favorites.filter(
        (favorite) => !favorite ||
          getFavoriteIdentity(favorite.type, favorite.title, favorite.href) !==
          getFavoriteIdentity(type, title, href),
      );

      if (writeFavorites(remainingFavorites)) {
        setFavoriteButtonState(target, false);
        renderFavorites();
        showMessage("Odstránené z obľúbených.");
      }
    } else {
      setFavoriteButtonState(target, true);
      showMessage(`${type === "club" ? "Klub" : "Hráč"} je už medzi obľúbenými.`);
    }
    return;
  }

  const favorite = { type, title, href };

  if (type === "player") {
    favorite.club = target.dataset.favoriteClub;
    favorite.position = target.dataset.favoritePosition;
    favorite.number = target.dataset.favoriteNumber;
  }

  if (writeFavorites([...favorites, favorite])) {
    setFavoriteButtonState(target, true);
    renderFavorites();
    showMessage("Pridané medzi obľúbené.");
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === usersStorageKey || event.key === currentUserStorageKey) {
    updateAccountNavigation();
    renderFavorites();
    renderProfile();
    syncFavoriteButtons();
  }
});