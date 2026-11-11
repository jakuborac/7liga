# 7. Liga — Style Guide

## Účel webu

Prehľadný zdroj výsledkov, štatistík a noviniek zo 7. Ligy. Obsah a navigácia majú slúžiť fanúšikom, rodinným príslušníkom hráčov, skautom aj miestnym sponzorom.

## Zásady návrhu

- Informácie o zápasoch, kluboch a hráčoch majú byť ľahko nájditeľné.
- Výsledky, tabuľka a najnovšie články sú hlavné vstupy na úvodnej stránke.
- Používame rovnaké horné menu na každej stránke.
- Obsah článkov a zápasov podporuje fotografie a viditeľnosť sponzorov.
- Rozhranie zostáva čisté, minimalistické a čitateľné.

## Štruktúra MVP

### Spoločné menu a päta

Horné menu obsahuje logo, vyhľadávanie, odkazy na hráčov, výsledky a články, obľúbené a prihlásenie/profil. Logo vedie na úvodnú stránku. Srdiečko odkazuje na podstránku obľúbených klubov a hráčov. Kluby sú dostupné cez vyhľadávanie a súvisiace odkazy. Spoločná päta na každej stránke zobrazuje „7. LIGA ©“ a tlačidlo Kontakt.

### Úvodná stránka

Zobrazuje stručný prehľad ligovej tabuľky a najnovšie články. Každý prehľad odkazuje na úplnú sekciu alebo detail.

### Výsledky a detail zápasu

Zoznam zápasov umožňuje filtrovanie podľa kola, klubu a sezóny. Detail zápasu obsahuje výsledok, zostavy a dostupné informácie o stretnutí; prepája sa s reportážou alebo fotoreportom.

### Tabuľka a štatistiky hráčov

Ligová tabuľka a prehľady strelcov, asistencií, kariet a odohraných minút. Údaje možno filtrovať podľa klubu a hráča.

### Hráči a kluby

Profil hráča zobrazuje klubovú príslušnosť a štatistiky. Profil klubu spája káder, výsledky a súvisiace články. Vyhľadávanie podľa mena má byť jednoduché a priamo dostupné.

### Články a fotoreporty

Prehľad článkov a samostatná sekcia fotoreportov s možnosťou nájsť obsah podľa klubu alebo sezóny. Detail článku obsahuje text, fotografiu zo zápasu a súvisiace odkazy. Články na úvodnej stránke budú odkazovať na svoje detaily po vytvorení príslušných podstránok. Kým nebudú pripravené fotografie, ich miesto v zozname tvorí prázdny obrysový rámček. V článkoch a fotoreportoch je priestor na zviditeľnenie sponzora.

### Vyhľadávanie

Jedno vyhľadávanie sa vysunie vedľa ikony lupy a pokrýva hráčov, kluby, výsledky, články a fotoreporty. Výsledky zobrazujú svoj typ a možno ich nájsť podľa názvu aj doplňujúcich kľúčových slov. Vyhľadávacie záznamy sa označujú typom obsahu; v aktuálnej obrazovke sú zatiaľ dostupné iba články, kým nepribudnú dáta hráčov a klubov.

### Obľúbené a profil

Používateľ sa môže zaregistrovať alebo prihlásiť, spravovať základný profil a ukladať obľúbené kluby či hráčov. Srdiečko otvorí zoznam obľúbených; na tejto stránke možno položky otvoriť alebo odstrániť. Uložené položky sa zachovajú v lokálnom úložisku prehliadača.

### Kontakt a informácie o webe

Jednoduchá stránka s kontaktnými údajmi a základnými informáciami o projekte.

## Vizuálny štýl

- **Nálada:** športová, kontrastná a prehľadná; inšpirácia čerpá z tmavých navigačných plôch a vrstvených panelov športových portálov.
- **Paleta:**

	| Úloha | Farba |
	| --- | --- |
	| Hlavný akcent a značka | Červená `#B51232` |
	| Jemný červený akcent | `#D98292` |
	| Hlavička | Svetlejšia grafitová `#34363C` |
	| Navigačné ovládacie prvky | Grafitová `#41434A` |
	| Pozadie stránky | Svetlosivá `#ECEEF1` |
	| Panely a tabuľkové riadky | Biela `#FFFFFF` a sivá `#E9EBEF` |
	| Hlavný text | Tmavá `#25272D` |
	| Pomocný text | Sivá `#6B7079` |

- **Použitie farieb:** červená je vyhradená pre značku, nadpisy, orámovania a aktívne stavy. Oranžová sa nepoužíva. Hlavička používa svetlejší grafit s bielymi ovládacími prvkami; obsahové panely ostávajú svetlé.
- **Logo:** stred loga vizuálne splýva s hlavičkou, aby značka pôsobila ako priehľadná grafika bez sivej alebo bielej výplne.
- **Obľúbené:** srdce je tenká obrysová ikona v kruhovom tlačidle; po aktivácii sa vyplní červenou.
- **Vyhľadávanie:** tmavá lišta v odtieni hlavičky sa vysúva doľava od lupy, priamo v riadku navigácie. Odkazy sa pri otvorení zalomia namiesto prekrytia. Na úzkom displeji sa pole otvorí vo vlastnom riadku a odkazy sa presunú podň.
- **Písmo:** výrazné tučné bezpätkové písmo na nadpisy a navigáciu; neutrálne bezpätkové písmo na dlhšie texty a štatistiky. Používame dostupné lokálne písma bez externého načítania.
- **Tvary:** čisté línie a mierne zaoblené rohy tlačidiel, fotografií a panelov.
- **Tiene:** mäkký tieň oddeľuje tmavú hlavičku a obsahové panely od pozadia; drobné tiene dodávajú hĺbku ovládacím prvkom a riadkom tabuľky.
- **Rozloženie:** obsahové sekcie zachovávajú svoju štruktúru; otvorené vyhľadávanie môže dočasne zväčšiť alebo zalomiť hlavičku, aby neprekrývalo ostatné odkazy.

## Interakcie a použiteľnosť

- Tlačidlá sa pri prejdení kurzorom plynulo a mierne zväčšia; pri odchode kurzora sa vrátia na pôvodnú veľkosť.
- Aktívne, hover a klávesnicové focus stavy musia byť zreteľné.
- Navigácia, filtre a výsledkové prehľady majú používať rovnaké pomenovania a správanie naprieč webom.
- Texty článkov a tabuľkové údaje musia zostať čitateľné aj na menších obrazovkách.

## Rozsah prvej verzie

MVP sa sústreďuje na výsledky, tabuľku, štatistiky, hráčov, kluby, články, fotoreporty, vyhľadávanie a základné obľúbené položky. Sponzorské umiestnenia možno zohľadniť v obsahu. Platobná brána a monetizácia článkov nie sú podmienkou prvej verzie.
