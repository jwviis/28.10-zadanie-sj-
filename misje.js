
function zaplanujMisje(nazwaMisji, typMisji) {
    if (!nazwaMisji || !typMisji) {
        console.log(" Błąd: Podaj nazwę i typ misji!");
        return null;
    }

    const misja = {
        nazwa: nazwaMisji,
        typ: typMisji,
        zaloga: [],
        dystans: 0,
        celeBadawcze: [],
        ladownia: {
            narzedzia: [],
            zapasy: 100
        }
    };

    console.log(` Misja "${nazwaMisji}" została zaplanowana!`);
    return misja;
}

function dodajDoZalogi(misja,czlonek) {
    if (!misja || !czlonek) return;
    misja.zaloga.push(czlonek);
    console.log('Dodano do załogi: ${czlonek}');

}

function zaladujSprzet(misja, sprzet) {
    if (!misja || !sprzet) return;
    misja.ladownia.narzedzia.push(sprzet);
    console.log(` Załadowano sprzęt: ${sprzet}`);
}
function przemierzDystans(misja, odleglosc) {
    if (!misja || !odleglosc) return;
    misja.dystans += odleglosc;
    misja.ladownia.zapasy -= 10; 
    console.log(` Misja przebyła ${odleglosc} AU. Łącznie: ${misja.dystans} AU`);
}

function raportMisji(misja) {
    if (!misja) return;

    let raport = `*** RAPORT MISJI: ${misja.nazwa} ***\n`;
    raport += `Typ misji: ${misja.typ}\n`;
    raport += `Przebyty dystans: ${misja.dystans} AU\n`;
    raport += `Pozostałe zapasy: ${misja.ladownia.zapasy}%\n\n`;

    raport += " ZAŁOGA \n";
    for (const czlonek of misja.zaloga) {
        raport += `- ${czlonek}\n`;
    }

    raport += "\n SPRZĘT W ŁADOWNI \n";
    for (const sprzet of misja.ladownia.narzedzia) {
        raport += `- ${sprzet}\n`;
    }

    return raport;
}


const misjaAlfa = zaplanujMisje("Ekspedycja na Marsa", "Badawcza");

if (misjaAlfa) {
    dodajDoZalogi(misjaAlfa, "Inżynier");
    dodajDoZalogi(misjaAlfa, "Pilot");
    zaladujSprzet(misjaAlfa, "Generator tlenu");
    zaladujSprzet(misjaAlfa, "Drukarka 3D");

    przemierzDystans(misjaAlfa, 10);
    przemierzDystans(misjaAlfa, 5);

    console.log("\n" + raportMisji(misjaAlfa));
}
