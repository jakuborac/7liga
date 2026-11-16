# 7. Liga

Úvodná stránka futbalového webu 7. Ligy je určená fanúšikom, rodinám hráčov, skautom a miestnym sponzorom.

## Aktuálny stav

Implementované sú responzívna úvodná obrazovka, podstránka obľúbených a samostatné detaily troch najnovších článkov. Úvodná stránka zobrazuje hornú navigáciu, najnovšie články, tabuľku a spoločnú pätu. Profily hráčov/klubov, výsledky, kontakt ani prihlásenie zatiaľ nie sú vytvorené; tabuľka obsahuje iba vizuálne riadky bez ligových dát. Fotografie článkov sú dočasne nahradené prázdnymi obrysovými rámčekmi.

## Dostupné správanie

- Lupa otvorí vyhľadávacie pole v hlavičke, ktoré sa rozšíri doľava a zalomí odkazy namiesto ich prekrytia. Vyhľadávanie podporuje typované záznamy článkov, hráčov a klubov; aktuálne sú v indexe len články.
- Vyhľadávanie normalizuje diakritiku a zatvára sa klávesom Escape alebo kliknutím mimo lišty.
- Srdiečko otvorí `oblubene.html`. Táto stránka načíta obľúbených hráčov a kluby z lokálneho úložiska prehliadača a umožňuje ich odstrániť. Profily s ovládaním na pridávanie obľúbených budú doplnené neskôr.
- Tlačidlo Kontakt zobrazí informačnú správu, kým nebudú doplnené kontaktné údaje.
- Kliknutie na článok alebo jeho výsledok vo vyhľadávaní otvorí samostatnú podstránku článku; z detailu sa možno vrátiť na zoznam najnovších článkov.
- Odkazy na nedostupné sekcie a prihlásenie zobrazia informačnú správu.
- Rozloženie sa prispôsobuje menším obrazovkám.

Stránka používa čisté HTML, CSS a JavaScript bez frameworkov a externých knižníc.

## Súbory

| Súbor | Obsah |
| --- | --- |
| `index.html` | Štruktúra úvodnej obrazovky |
| `oblubene.html` | Podstránka obľúbených hráčov a klubov |
| `clanok-derby.html` | Detail článku o miestnom derby |
| `clanok-posily.html` | Detail článku o nových posilách |
| `clanok-obcerstvenie.html` | Detail článku o občerstvení |
| `styles.css` | Vizuálny štýl a responzívne rozloženie |
| `script.js` | Vyhľadávanie, prepnutie obľúbených a informačné správy |
| `docs/style-guide.md` | Schválený vizuálny smer a návrh štruktúry MVP |
| `docs/prototyp/menu.jpg` | Referenčný obrázok rozloženia úvodnej stránky |
| `docs/Zadanie webu - oráč.docx` | Pôvodné zadanie projektu |

## Náhľad stránky

V editore VS Code možno otvoriť `index.html` cez **Show Preview** alebo rozšírenie **Live Preview**.

## Posledná úprava

- 2026-11-16: Články a výsledky ich vyhľadávania otvárajú samostatné responzívne detaily so spoločnou hlavičkou a pätičkou.

README sa po každej úlohe, ktorá zmení kód, funkcie alebo stav projektu, aktualizuje ako posledný krok. Vždy rozlišuje medzi tým, čo je už na stránke, a tým, čo je zatiaľ iba plánované.
