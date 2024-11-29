 type Pracownik = {
    id: number
    imie: string
    nazwisko: string
    stanowisko: Stanowisko
    pseudonim: string
    opis: string
    pensja: [number,Waluty]
    zwolnij?: ((string| number) ) => void;
 }

 type PaniBasia = {
    graNaSkrzypcach: string
    bezNiejTenZakładUpadnie: Boolean
 }

 export type Piesek = {
    imie: string
    rasa: string
    isPies: boolean
 }

 type Powód ={}

 enum Stanowisko {
    "szef",
    "anetka",
    "pani basia",
    "podbutnik",
 }

 enum Waluty {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski
 }

