import { Priorytety } from "./types/otherTypes.js";
import { Raport } from "./types/raportTypes.js";

export const generujRaport = <T>(
  daneRaportu: T,
  efektywność: number,
  priorytet: Priorytety
): Promise<T & { efektywność: number; priorytet: Priorytety }> => {
  return new Promise((resolve) => {
    resolve({
      efektywność,
      priorytet,
      ...daneRaportu,
    });
  });
};
