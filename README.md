# 7. Liga

Úvodná stránka futbalového webu 7. Ligy je určená fanúšikom, rodinám hráčov, skautom a miestnym sponzorom.

## Aktuálny stav

Implementované sú responzívna úvodná obrazovka, podstránka obľúbených, prehľad piatich článkov s filtrovaním podľa klubu a sezóny, detaily týchto článkov a profily ôsmich klubov. Úvodná stránka zobrazuje iba tri najnovšie články, tabuľku klubov a spoločnú pätu. Tlačidlo Fotoreporty zatiaľ oznamuje, že sekcia nie je dostupná. Profily hráčov, samostatná sekcia výsledkov, kontakt ani prihlásenie zatiaľ nie sú vytvorené. Súpisky klubov čakajú na doplnenie.

## Dostupné správanie

- Lupa otvorí vyhľadávacie pole v hlavičke, ktoré sa rozšíri doľava a zalomí odkazy namiesto ich prekrytia. Vyhľadávanie podporuje typované záznamy článkov, hráčov a klubov; aktuálne sú v indexe len články.
- Vyhľadávanie normalizuje diakritiku a zatvára sa klávesom Escape alebo kliknutím mimo lišty.
- Srdiečko otvorí `oblubene.html`. Táto stránka načíta obľúbených hráčov a kluby z lokálneho úložiska prehliadača a umožňuje ich odstrániť.
- Riadky ligovej tabuľky otvárajú profily klubov v `kluby/`. Srdiečko na profile klubu pridáva alebo odoberá klub z rovnakého zoznamu obľúbených uloženého v `localStorage`.
- Tlačidlo Kontakt zobrazí informačnú správu, kým nebudú doplnené kontaktné údaje.
- Kliknutie na článok alebo jeho výsledok vo vyhľadávaní otvorí samostatnú podstránku článku; z detailu sa možno vrátiť na zoznam najnovších článkov.
- Odkaz Články v hlavnej navigácii otvorí `clanky.html` s článkami a tlačidlom Fotoreporty.
- `clanky.html` obsahuje päť článkov; úvodná stránka si ponecháva iba tri najnovšie.
- Prehľad článkov možno filtrovať podľa všetkých ôsmich klubov a sezóny 2026/2027.
- Odkazy na nedostupné sekcie a prihlásenie zobrazia informačnú správu.
- Rozloženie sa prispôsobuje menším obrazovkám.

Stránka používa čisté HTML, CSS a JavaScript bez frameworkov a externých knižníc.

## Súbory

| Súbor | Obsah |
| --- | --- |
| `index.html` | Štruktúra úvodnej obrazovky |
| `clanky.html` | Prehľad článkov, filtre klubu a sezóny, tlačidlo Fotoreporty |
| `oblubene.html` | Podstránka obľúbených hráčov a klubov |
| `clanok-derby.html` | Detail článku o miestnom derby |
| `clanok-posily.html` | Detail článku o nových posilách |
| `clanok-obcerstvenie.html` | Detail článku o občerstvení |
| `clanok-priprava.html` | Detail článku o príprave na zápas |
| `clanok-fanusikovia.html` | Detail článku o atmosfére na ihrisku |
| `kluby/*.html` | Profily ôsmich klubov s informáciami a prázdnou šablónou súpisky |
| `styles.css` | Vizuálny štýl a responzívne rozloženie |
| `script.js` | Vyhľadávanie, prepnutie obľúbených a informačné správy |
| `docs/style-guide.md` | Schválený vizuálny smer a návrh štruktúry MVP |
| `docs/prototyp/menu.jpg` | Referenčný obrázok rozloženia úvodnej stránky |
| `docs/Zadanie webu - oráč.docx` | Pôvodné zadanie projektu |

## Náhľad stránky

V editore VS Code možno otvoriť `index.html` cez **Show Preview** alebo rozšírenie **Live Preview**.

## Posledná úprava

- 2026-11-18: Pridané filtre článkov podľa ôsmich klubov a sezóny 2026/2027.
- 2026-11-18: Odstránená spodná sekcia fotoreportov, pridané dva články do samostatného prehľadu; úvodná stránka zostala na troch najnovších.
- 2026-11-18: Pridaný samostatný prehľad najnovších článkov a fotoreportov; navigácia a návrat z detailov vedú na túto stránku.
- 2026-11-16: Články a výsledky ich vyhľadávania otvárajú samostatné responzívne detaily so spoločnou hlavičkou a pätičkou.
- 2026-11-16: Ligová tabuľka zobrazuje osem klubov s logami, poradím, bodmi a gólovým rozdielom v zarovnaných, zaoblených riadkoch.
- 2026-11-16: Riadky tabuľky otvárajú klubové profily; ich srdiečka zdieľajú a prepínajú stav obľúbených klubov.

README sa po každej úlohe, ktorá zmení kód, funkcie alebo stav projektu, aktualizuje ako posledný krok. Vždy rozlišuje medzi tým, čo je už na stránke, a tým, čo je zatiaľ iba plánované.
