import { Priorytety } from "./otherTypes.js";

export type Raport = {
  efektywność: number;
  priorytet: Priorytety;
};

type RaportPracownika = {
  obniżonaEfektywność: boolean;
  spadekPensji: number;
};

type RaportPracowników = {
  id: RaportPracownika;
};

type RaportPieseczka = {
  szczekanie: true;
  isPies: true;
  aKtoToJestTakimSłodkimPieseczkiem: true;
};
