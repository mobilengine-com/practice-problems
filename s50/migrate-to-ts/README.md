Typescript migráció feladat
========================

Ebben a könyvtárban van egy RFS file.

1. Konvertáld át az RFS-t Typescriptre, a `mebt rfstots` paranccsal!
Mi változott meg?

2. Nevezd át a file-t .ts-re, és generálj typescript definíciós fileokat!
Most ehhez még kell a --tsgen flag, de később mindig megcsinálja majd a mebt.
Javítani kell majd a scripten.

3. let helyett használj mindenhol const-ot!

4. Az if-ben lévő ThrowError-t emeld ki az ifből és vedd körbe try..catch blokkal.
Csak logold a hibát de ne állítsd le a script futását!

5. Mozgasd át a myAddFunction-t egy másik typescript fileba, és
importáld be ezt a sample fileban, és használd a függvényt.

6. Csinálj egy függvényt ami kiszámolja egy derékszögű háromszög átfogójának a hosszát.
Használj typescript típusokat, és írj dokumentációt is!
Használd ezt a függvényt a másik fileban.
Rfsben meg lehet ezt könnyen csinálni?