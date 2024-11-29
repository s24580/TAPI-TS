
import {Priorytety} from "./types/otherTypes.js"

export const generujRaport = <T>(daneRaportu:DaneRaportu, efektywność:Number, priorytet:Priorytety) => {
    return new Promise((resolve) => {
        resolve({
        efektywność,
        priorytet,
        ...daneRaportu
    })});
}