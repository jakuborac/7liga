# 7. Liga

Úvodná stránka futbalového webu 7. Ligy je určená fanúšikom, rodinám hráčov, skautom a miestnym sponzorom.

## Aktuálny stav

Implementované sú responzívna úvodná obrazovka, klientská demo registrácia a prihlásenie, používateľské profily s účtovo viazanými obľúbenými, stránka hráčov so šiestimi tabuľkami štatistík a samostatnými profilmi hráčov, stránka výsledkov so zápasmi 14 kôl, prehľad piatich článkov s filtrovaním podľa klubu a sezóny, detaily týchto článkov a profily ôsmich klubov s kompletnými súpiskami a fiktívnymi kontaktnými osobami. Úvodná stránka zobrazuje iba tri najnovšie články, ligovú tabuľku a spoločnú pätu. Tlačidlo Fotoreporty zatiaľ oznamuje, že sekcia nie je dostupná. Klientské prihlasovanie používa `localStorage` a nie je bezpečnou náhradou serverového overovania; na testovanie nepoužívaj skutočné heslo ani citlivé údaje.

## Dostupné správanie

- Lupa otvorí vyhľadávacie pole v hlavičke, ktoré sa rozšíri doľava a zalomí odkazy namiesto ich prekrytia. Vyhľadávanie podporuje typované záznamy článkov, hráčov a klubov; aktuálne sú v indexe len články.
- Vyhľadávanie normalizuje diakritiku a zatvára sa klávesom Escape alebo kliknutím mimo lišty.
- Prihlásenie alebo registrácia cez navigáciu otvorí `prihlasenie.html`; formulár podporuje prihlásenie e-mailom alebo prezývkou a registráciu s prezývkou, e-mailom a heslom. Testovací účet: `fanusik@liga.sk`, heslo `123456`.
- Stav prihlásenia sa ukladá do `localStorage` a premieta sa do navigácie na všetkých stránkach. Prihlásený používateľ otvorí `profil.html`, kde môže skontrolovať svoje údaje a odhlásiť sa.
- Obľúbené kluby a hráči sa ukladajú priamo k príslušnému používateľovi. Srdiečko vyžaduje prihlásenie; staršie uložené obľúbené sa pri prvom prihlásení prenesú do účtu.
- Stránka `oblubene.html` zobrazuje obľúbené kluby a hráčov vrátane klubových log, odkazov na profily a možnosti odstránenia.
- Riadky ligovej tabuľky otvárajú profily klubov v `kluby/`. Srdiečko na profile klubu pridáva alebo odoberá klub z používateľovho zoznamu obľúbených.
- Profily všetkých ôsmich klubov zobrazujú deväť hráčov s číslom, menom a pozíciou. Srdiečko pri hráčovi prepína jeho stav a ukladá meno, klub, číslo dresu a pozíciu do používateľského profilu; hráč je uvedený aj na stránke `oblubene.html`.
- Každý klubový profil obsahuje vymyslenú kontaktnú osobu a ukážkovú e-mailovú adresu na rezervovanej doméne `example.com`.
- Odkaz HRÁČI v hlavnej navigácii otvorí `hraci.html`, ktorá zobrazuje tabuľky strelcov, asistencií, čistých kont, odohraných minút a kariet v responzívnej dvojstĺpcovej mriežke.
- Kliknutie na meno v štatistikách otvorí profil hráča cez `hrac.html`; profil zobrazuje obrázok `img/profilovka.jpg` a iba štatistické tabuľky, v ktorých hráč figuruje.
- Odkaz VÝSLEDKY otvorí `vysledky.html` s výsledkami 14 kôl. Filter okamžite zobrazí zvolené kolo alebo všetky kolá bez obnovenia stránky.
- Kliknutie na zápas otvorí modálny detail s konečným aj polčasovým skóre, časovou osou gólov a kariet a porovnaním štatistík; detail má jeden vnútorný posuvník a pri domácich aj hosťujúcich možno pridať klub medzi obľúbené.
- Tlačidlo Kontakt zobrazí informačnú správu, kým nebudú doplnené kontaktné údaje.
- Kliknutie na článok alebo jeho výsledok vo vyhľadávaní otvorí samostatnú podstránku článku; z detailu sa možno vrátiť na zoznam najnovších článkov.
- Odkaz Články v hlavnej navigácii otvorí `clanky.html` s článkami a tlačidlom Fotoreporty.
- `clanky.html` obsahuje päť článkov; úvodná stránka si ponecháva iba tri najnovšie.
- Prehľad článkov možno filtrovať podľa všetkých ôsmich klubov a sezóny 2026/2027.
- Odkazy na nedostupné sekcie zobrazia informačnú správu.
- Rozloženie sa prispôsobuje menším obrazovkám.

Stránka používa čisté HTML, CSS a JavaScript bez frameworkov a externých knižníc.

## Súbory

| Súbor | Obsah |
| --- | --- |
| `index.html` | Štruktúra úvodnej obrazovky |
| `hraci.html` | Šesť responzívnych tabuliek štatistík hráčov |
| `hrac.html` | Profil hráča s profilovou fotografiou a jeho relevantnými štatistikami |
| `vysledky.html` | Výsledky zápasov 14 kôl s filtrom, detailmi zápasov a srdiečkami klubov |
| `prihlasenie.html` | Klientský formulár registrácie a prihlásenia |
| `profil.html` | Používateľské údaje a obľúbené kluby a hráči |
| `clanky.html` | Prehľad článkov, filtre klubu a sezóny, tlačidlo Fotoreporty |
| `oblubene.html` | Podstránka obľúbených hráčov a klubov |
| `clanok-derby.html` | Detail článku o miestnom derby |
| `clanok-posily.html` | Detail článku o nových posilách |
| `clanok-obcerstvenie.html` | Detail článku o občerstvení |
| `clanok-priprava.html` | Detail článku o príprave na zápas |
| `clanok-fanusikovia.html` | Detail článku o atmosfére na ihrisku |
| `kluby/*.html` | Profily ôsmich klubov s informáciami, fiktívnymi kontaktmi a kompletnými súpiskami |
| `styles.css` | Vizuálny štýl a responzívne rozloženie |
| `script.js` | Vyhľadávanie, používateľské účty, obľúbené, filter kôl a generovanie detailov zápasov |
| `docs/style-guide.md` | Schválený vizuálny smer a návrh štruktúry MVP |
| `docs/prototyp/menu.jpg` | Referenčný obrázok rozloženia úvodnej stránky |
| `docs/Zadanie webu - oráč.docx` | Pôvodné zadanie projektu |

## Náhľad stránky

V editore VS Code možno otvoriť `index.html` cez **Show Preview** alebo rozšírenie **Live Preview**.

## Posledná úprava

- 2026-11-18: Pridaný klikateľný detail zápasu s udalosťami a štatistikami; kluby v zápasoch možno pridávať medzi obľúbené a detail používa jeden posuvník.
- 2026-11-18: Pridaná klientská registrácia, prihlásenie a používateľský profil; obľúbené sa ukladajú k účtu a menu zobrazuje aktuálny stav prihlásenia.
- 2026-11-18: Pridaná podstránka `vysledky.html` s výsledkami 14 kôl a okamžitým filtrom podľa kola; navigácia VÝSLEDKY vedie na túto stránku.
- 2026-11-18: Pridané profily hráčov dostupné z mien v štatistikách; profily zobrazujú spoločnú profilovú fotografiu a iba príslušné tabuľky.
- 2026-11-18: Pridaná podstránka `hraci.html` so šiestimi tabuľkami štatistík; odkaz HRÁČI v navigácii teraz vedie na túto stránku.
- 2026-11-18: Pridaný fiktívny kontakt s ukážkovou e-mailovou adresou na každý z ôsmich klubových profilov.
- 2026-11-18: Doplnených deväť hráčov na súpisky všetkých ôsmich klubov; obľúbení hráči sa ukladajú aj s klubom, číslom a pozíciou.
- 2026-11-18: Pridané filtre článkov podľa ôsmich klubov a sezóny 2026/2027.
- 2026-11-18: Odstránená spodná sekcia fotoreportov, pridané dva články do samostatného prehľadu; úvodná stránka zostala na troch najnovších.
- 2026-11-18: Pridaný samostatný prehľad najnovších článkov a fotoreportov; navigácia a návrat z detailov vedú na túto stránku.
- 2026-11-16: Články a výsledky ich vyhľadávania otvárajú samostatné responzívne detaily so spoločnou hlavičkou a pätičkou.
- 2026-11-16: Ligová tabuľka zobrazuje osem klubov s logami, poradím, bodmi a gólovým rozdielom v zarovnaných, zaoblených riadkoch.
- 2026-11-16: Riadky tabuľky otvárajú klubové profily; ich srdiečka zdieľajú a prepínajú stav obľúbených klubov.

README sa po každej úlohe, ktorá zmení kód, funkcie alebo stav projektu, aktualizuje ako posledný krok. Vždy rozlišuje medzi tým, čo je už na stránke, a tým, čo je zatiaľ iba plánované.
