# 7. Liga

Úvodná stránka futbalového webu 7. Ligy je určená fanúšikom, rodinám hráčov, skautom a miestnym sponzorom.

## Aktuálny stav

Implementovaná je jedna responzívna úvodná obrazovka podľa prototypu. Zobrazuje hornú navigáciu, najnovšie články a tabuľku. Nie sú vytvorené samostatné stránky pre hráčov, výsledky, články ani prihlásenie; tabuľka zatiaľ obsahuje iba vizuálne riadky bez ligových dát.

## Dostupné správanie

- Tlačidlo vyhľadávania otvorí pole, ktoré filtruje články zobrazené na úvodnej stránke.
- Srdce prepína stav obľúbených položiek iba počas aktuálneho otvorenia stránky.
- Odkazy na nedostupné sekcie, detail článku a prihlásenie zobrazia informačnú správu.
- Rozloženie sa prispôsobuje menším obrazovkám.

Stránka používa čisté HTML, CSS a JavaScript bez frameworkov a externých knižníc. Fotografia článkov je načítaná z lokálneho súboru `docs/prototyp/clanky.jpg`.

## Súbory

| Súbor | Obsah |
| --- | --- |
| `index.html` | Štruktúra úvodnej obrazovky |
| `styles.css` | Vizuálny štýl a responzívne rozloženie |
| `script.js` | Vyhľadávanie, prepnutie obľúbených a informačné správy |
| `docs/style-guide.md` | Schválený vizuálny smer a návrh štruktúry MVP |
| `docs/prototyp/menu.jpg` | Referenčný obrázok rozloženia úvodnej stránky |
| `docs/prototyp/clanky.jpg` | Lokálna fotografia použitá v zozname článkov |
| `docs/Zadanie webu - oráč.docx` | Pôvodné zadanie projektu |

## Náhľad stránky

V editore VS Code možno otvoriť `index.html` cez **Show Preview** alebo rozšírenie **Live Preview**.

## Posledná úprava

- 2026-11-11: Štartovaciu šablónu nahradila úvodná obrazovka podľa prototypu; doplnené sú lokálna fotografia, filtrovanie článkov a základné interakcie. Ďalšie obrazovky a skutočné ligové dáta zatiaľ nie sú implementované.

README sa po každej úlohe, ktorá zmení kód, funkcie alebo stav projektu, aktualizuje ako posledný krok. Vždy rozlišuje medzi tým, čo je už na stránke, a tým, čo je zatiaľ iba plánované.
