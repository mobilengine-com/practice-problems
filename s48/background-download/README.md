Background file download feladat
==================================

A `files` mappában találsz néhány képet, ezeket töltsd fel a cégedbe a `mebt upload-files` paranccsal.
Töltsd fel a `solution` mappában lévő solutiont is, a refadattal együtt.

Minden feladat között lépj ki (Wipe) hogy a kliens törölje a letöltött fileokat.

Módosítsd a refadatokat ha kell!

A feladatok:

* Állítsd be a szervert hogy a kliens ne töltsön le fileokat!
  * Ellenőrizd a kliensen, hogy offline állapotban nem jeleníti meg a képeket!
* Állítsd be a szervert úgy, hogy a kliens minden filet a háttérben töltsön le!
  * Szinkronizációkor figyeld a formon a progresst!
  * Ellenőrizd hogy offline elérhetőek a fileok!
* Állítsd be a szervert úgy, hogy:
  * sync közben csak az autókat töltse le,
  * a gyümölcsöket pedig a sync után a háttérben!
* Hogy lehetne a fordítottját megoldani?
* Hogy lehetne azt megoldani, hogy 
  * az 1MB-nál kisebb fileokat töltse le a kliens sync közben 
  * és a többit a háttérben?
* Állítsd be a szervert úgy, hogy a kliens minden filet a sync közben töltsön le!
  * Mi ilyenkor a progress értéke?
  * Ha újra beállítod hogy ne töltődjön le file és szinkronizálsz, ott lesznek a fileok a kliensen vagy sem? És miért?