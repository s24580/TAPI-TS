/**
 * Zadanie 10.
 *
 * Stwórz typ `PartialKontrola<T>`, który w zależności od typu `T` zwraca częściowo opcjonalny typ `Kontrola`.
 * Klucze z typu `T` mają być opcjonalne, a pozostałe wymagane.
 * Rozwiązanie powinno działać dla każdego typu `T`.
 */

export type Kontrola = {
  id: number;
  data: string;
  godzina: string;
  miejsce: string;
  typ: string;
  opis: string;
  status: "ok" | "nok";
};

export type StaraKontrola = {
  id: number;
  data: string;
  miejsce: string;
};

export type JeszczeStarszaKontrola = {
  id: number;
  data: string;
  godzina: string;
  miejsce: string;
  typ: string;
  opis: string;
};

//# ---
//Construct a type with the properties of T except for those in type K. - omit
// * Make all properties in T optional - partial
export type PartialKontrola<T> = Omit<Kontrola, keyof T> & Partial<Kontrola>;

const kontrola1: PartialKontrola<StaraKontrola> = {
  godzina: "12:00",
  typ: "kontrola",
  opis: "Opis",
  status: "ok",
};

const kontrola2: PartialKontrola<JeszczeStarszaKontrola> = {
  status: "nok",
};
