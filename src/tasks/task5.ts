/**
 * Zadanie 5.
 *
 * Rozszerz typ `Wydatek` o dwa nowe typy/interfejsy:
 * - `WydatekSzefa` - dodaj pole `isSzef` typu `true`
 * - `WycieczkaSzefaNaKosztFirmy` - dodaj pole `cel` typu `string`
 *
 */

export type Wydatek = {
  kwota: number;
  opis: string;
};

//# ---

//export type WydatekSzefa = any;
export type WycieczkaSzefaNaKosztFirmy = {
  cel: string; //ptk2
} & WydatekSzefa;

export interface WydatekSzefa extends Wydatek {
  isSzef: true; //ptk1
}
//export interface WycieczkaSzefaNaKosztFirmy {};
