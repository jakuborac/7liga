/* Centralizovana databaza supisky a sezonnych statistik 7. Ligy. */
(function () {
  const clubs = [
    ["FC Tatran Lev", "tatran-lev", "img/kluby/tatran_lev-removebg-preview.png", [
      ["1", "Marek Kováč", "Brankár"], ["4", "Jakub Varga", "Obranca"],
      ["5", "Tomáš Horváth", "Obranca"], ["14", "Lukáš Baláž", "Obranca"],
      ["8", "Martin Tóth", "Stredopoliar"], ["10", "Filip Nagy", "Stredopoliar"],
      ["17", "Patrik Molnár", "Stredopoliar"], ["9", "Dávid Szabó", "Útočník"],
      ["11", "Samuel Polák", "Útočník"]
    ]],
    ["SK Karpaty Vlci", "karpaty-vlci", "img/kluby/karpaty-removebg-preview.png", [
      ["1", "Michal Kučera", "Brankár"], ["2", "Peter Hudák", "Obranca"],
      ["6", "Andrej Šimko", "Obranca"], ["15", "Matúš Kollár", "Obranca"],
      ["7", "Adam Gál", "Stredopoliar"], ["10", "Dominik Oravec", "Stredopoliar"],
      ["20", "Kristián Benko", "Stredopoliar"], ["9", "Juraj Blaho", "Útočník"],
      ["19", "Erik Zeman", "Útočník"]
    ]],
    ["AC Nitra Corgoň", "nitra-corgon", "img/kluby/corgon-removebg-preview.png", [
      ["12", "Roman Kráľ", "Brankár"], ["3", "Štefan Bartoš", "Obranca"],
      ["4", "Oliver Dudáš", "Obranca"], ["16", "Richard Takáč", "Obranca"],
      ["8", "Matej Urban", "Stredopoliar"], ["10", "Boris Hruška", "Stredopoliar"],
      ["22", "Alexej Černý", "Stredopoliar"], ["9", "Viktor Valent", "Útočník"],
      ["18", "Denis Sýkora", "Útočník"]
    ]],
    ["TJ Dynamo Blesk", "dynamo-blesk", "img/kluby/blesk-removebg-preview.png", [
      ["1", "Branislav Majer", "Brankár"], ["5", "Ján Kmeť", "Obranca"],
      ["13", "Róbert Farkaš", "Obranca"], ["21", "Daniel Gajdoš", "Obranca"],
      ["6", "Ondrej Lacko", "Stredopoliar"], ["8", "Sebastián Pál", "Stredopoliar"],
      ["10", "Miroslav Kováčik", "Stredopoliar"], ["9", "Adrián Chovan", "Útočník"],
      ["14", "Nicolas Mlynár", "Útočník"]
    ]],
    ["FC Topoľ Orly", "topol-orly", "img/kluby/orly.png", [
      ["30", "Pavol Sloboda", "Brankár"], ["2", "Norbert Fehér", "Obranca"],
      ["4", "Tibor Vlk", "Obranca"], ["15", "Kevin Meszároš", "Obranca"],
      ["7", "Damián Holub", "Stredopoliar"], ["10", "Radoslav Juhász", "Stredopoliar"],
      ["17", "Tobias Straka", "Stredopoliar"], ["9", "Nikolas Švec", "Útočník"],
      ["11", "Maroš Bílek", "Útočník"]
    ]],
    ["ŠK Horal Hrad", "horal-hrad", "img/kluby/horal-removebg-preview.png", [
      ["1", "Vladimír Baran", "Brankár"], ["3", "Stanislav Kováč", "Obranca"],
      ["5", "Igor Paška", "Obranca"], ["12", "Ľuboš Dubovský", "Obranca"],
      ["8", "Marián Hlinka", "Stredopoliar"], ["10", "František Moravčík", "Stredopoliar"],
      ["16", "Gabriel Žák", "Stredopoliar"], ["9", "Milan Štefánik", "Útočník"],
      ["23", "René Janík", "Útočník"]
    ]],
    ["ŠK Vulkán Ruda", "vulkan-ruda", "img/kluby/vulkan-removebg-preview.png", [
      ["1", "Dušan Rusnák", "Brankár"], ["4", "Jaroslav Kováč", "Obranca"],
      ["6", "Marcel Danko", "Obranca"], ["19", "Kamil Sedlák", "Obranca"],
      ["8", "Zdenko Pastorek", "Stredopoliar"], ["10", "Anton Nemec", "Stredopoliar"],
      ["15", "Roland Kubík", "Stredopoliar"], ["9", "Vincent Hrubý", "Útočník"],
      ["21", "Leoš Malý", "Útočník"]
    ]],
    ["TJ Družstevník Klas", "druzstevnik-klas", "img/kluby/klaś-removebg-preview.png", [
      ["1", "Jozef Kováč", "Brankár"], ["2", "Ladislav Papp", "Obranca"],
      ["5", "Karol Végh", "Obranca"], ["14", "Imrich Szilágyi", "Obranca"],
      ["7", "Attila Kiss", "Stredopoliar"], ["10", "Zoltán Németh", "Stredopoliar"],
      ["18", "Csaba Varga", "Stredopoliar"], ["9", "Gábor Molnár", "Útočník"],
      ["11", "Tamás Horváth", "Útočník"]
    ]]
  ];

  function slug(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("sk").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const overrides = {
    "david-szabo": { matches: 14, goals: 12 },
    "juraj-blaho": { matches: 14, goals: 10 },
    "viktor-valent": { matches: 13, goals: 9 },
    "samuel-polak": { matches: 14, goals: 8 },
    "filip-nagy": { matches: 13, minutes: 1145, assists: 9 },
    "marek-kovac": { matches: 14, minutes: 1260, cleanSheets: 7 },
    "karol-vegh": { matches: 13, yellowCards: 6, redCards: 1 },
    "zdenko-pastorek": { matches: 12, redCards: 2 },
    "jakub-varga": { matches: 14, minutes: 1215 },
    "stefan-bartos": { matches: 13, minutes: 1190 },
    "jan-kmet": { matches: 14, minutes: 1170 },
    "stanislav-kovac": { matches: 13, minutes: 1120 },
    "ladislav-papp": { matches: 13, minutes: 1080 },
    "michal-kucera": { matches: 14, minutes: 1260, cleanSheets: 6 },
    "roman-kral": { matches: 14, cleanSheets: 5 },
    "branislav-majer": { matches: 13, cleanSheets: 4 },
    "pavol-sloboda": { matches: 13, cleanSheets: 3 },
    "vladimir-baran": { matches: 13, cleanSheets: 3 },
    "dusan-rusnak": { matches: 12, cleanSheets: 2 },
    "jozef-kovac": { matches: 12, cleanSheets: 1 },
    "adrian-chovan": { matches: 13, goals: 7 },
    "nikolas-svec": { matches: 14, goals: 6 },
    "erik-zeman": { matches: 12, goals: 5 },
    "milan-stefanik": { matches: 13, goals: 4 },
    "dominik-oravec": { matches: 14, assists: 8 },
    "martin-toth": { matches: 14, assists: 7 },
    "boris-hruska": { matches: 13, assists: 6 },
    "miroslav-kovacik": { matches: 14, assists: 6 },
    "radoslav-juhasz": { matches: 13, assists: 5 },
    "marian-hlinka": { matches: 13, assists: 4 },
    "zoltan-nemeth": { matches: 12, assists: 3 },
    "marcel-danko": { matches: 13, yellowCards: 5 },
    "andrej-simko": { matches: 13, yellowCards: 5 },
    "robert-farkas": { matches: 13, yellowCards: 4 },
    "richard-takac": { matches: 12, yellowCards: 4 },
    "tibor-vlk": { matches: 13, yellowCards: 4 },
    "tomas-horvath": { matches: 13, yellowCards: 3 },
    "igor-paska": { matches: 12, yellowCards: 3 },
    "daniel-gajdos": { matches: 12, redCards: 1 },
    "norbert-feher": { matches: 12, redCards: 1 },
    "oliver-dudas": { matches: 12, redCards: 1 },
    "lukas-balaz": { matches: 13, redCards: 1 }
  };

  const personalOverrides = {
    "zoltan-nemeth": { nationality: "Maďarsko", flag: "🇭🇺", age: 29 },
    "attila-kiss": { nationality: "Maďarsko", flag: "🇭🇺", age: 27 },
    "csaba-varga": { nationality: "Maďarsko", flag: "🇭🇺", age: 24 },
    "gabor-molnar": { nationality: "Maďarsko", flag: "🇭🇺", age: 26 },
    "tamas-horvath": { nationality: "Maďarsko", flag: "🇭🇺", age: 31 },
    "norbert-feher": { nationality: "Maďarsko", flag: "🇭🇺", age: 30 },
    "radoslav-juhasz": { nationality: "Maďarsko", flag: "🇭🇺", age: 27 },
    "michal-kucera": { nationality: "Česko", flag: "🇨🇿", age: 29 },
    "alexej-cerny": { nationality: "Česko", flag: "🇨🇿", age: 23 },
    "leos-maly": { nationality: "Česko", flag: "🇨🇿", age: 30 },
    "jakub-varga": { nationality: "Poľsko", flag: "🇵🇱", age: 26 },
    "kamil-sedlak": { nationality: "Poľsko", flag: "🇵🇱", age: 25 },
    "andrej-simko": { nationality: "Ukrajina", flag: "🇺🇦", age: 28 },
    "roman-kral": { nationality: "Ukrajina", flag: "🇺🇦", age: 34 }
  };

  const players = [];
  let globalIndex = 0;
  clubs.forEach(([club, clubId, logo, roster]) => {
    roster.forEach(([number, name, position], positionIndex) => {
      const id = slug(name);
      const seed = ++globalIndex * 7 + positionIndex;
      const matches = position === "Brankár" ? 12 + (seed % 3) : 8 + (seed % 7);
      const minutes = position === "Brankár" ? Math.min(1260, matches * 90) : Math.min(1260, 660 + ((seed * 43) % 520));
      const maxGoals = position === "Útočník" ? 7 : position === "Stredopoliar" ? 4 : 2;
      const stats = {
        matches,
        minutes,
        goals: position === "Brankár" ? 0 : ((seed * 3) % (maxGoals + 1)),
        assists: position === "Brankár" ? 0 : ((seed * 5) % 7),
        yellowCards: (seed * 2) % 5,
        redCards: seed % 8 === 0 ? 1 : 0,
        cleanSheets: position === "Brankár" ? (seed % 5) : 0
      };
      Object.assign(stats, overrides[id] || {});
      let age;
      if (position === "Brankár") {
        age = 31 + (seed % 5);
      } else if (seed % 9 === 0) {
        age = 19 + (seed % 3);
      } else {
        age = 24 + (seed % 6);
      }
      const personal = personalOverrides[id] || {
        nationality: "Slovensko",
        flag: "🇸🇰",
        age
      };
      players.push({
        id, name, number, position, club, clubId, logo,
        href: `hrac.html?id=${id}`,
        clubHref: `kluby/${clubId}.html`,
        stats,
        age: personal.age,
        nationality: personal.nationality,
        flag: personal.flag
      });
    });
  });

  window.LIGA_HRACI_DATA = Object.freeze({
    players: Object.freeze(players),
    getPlayer(id) { return players.find((player) => player.id === id) || null; },
    getByName(name) { return players.find((player) => player.name === name) || null; }
  });
})();
