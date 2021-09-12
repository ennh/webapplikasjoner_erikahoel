// Oppgave 1
/* Her lager jeg variabler for teksten som skal fjernes
og knappen som skal fjerne teksten */
const tekstSomFjernes = document.getElementById('remove');
const fjerneKnapp = document.getElementById('remove-btn');

// Variabel for å faktisk fjerne teksten
const fjernTekst = () => {
    tekstSomFjernes.innerHTML = null;
};

// Har gitt knappen en addEventListener (click), slik at når knappen blir trykket på, vil det i fjerneTekst variabelen gjennomføres
fjerneKnapp.addEventListener('click', fjernTekst);


// Oppgave 2
/* Her lager jeg en variabel for teksten som skal endres, og knappen
som skal endre teksten */
const tekstSomEndres = document.getElementById('change');
const endreKnapp = document.getElementById('change-btn');

// Variabel for å endre teksten til "Hei på deg!"
const endreTekst = () => {
    tekstSomEndres.innerHTML = "Hei på deg!";
};

// Har gitt knappen en addEventListener (click), slik at når knappen blir trykket på, vil det i endreTekst variabelen gjennomføres
endreKnapp.addEventListener('click', endreTekst);


// Oppgave 3
/* En variabel for der du skal skrive tekst, og en variabel
for selve input feltet */
const inputTekst = document.getElementById('input-text');
const input = document.getElementById('input');

// Variabel for å fjerne teksten som er skrevet under input feltet
const fjernDefaultTekst = () => {
    inputTekst.innerHTML = null;
}

fjernDefaultTekst();

const oppdaterTekst = (handling) => {
    let bokstav = handling.key;
    inputTekst.innerHTML += bokstav;
};

input.addEventListener('keyup', oppdaterTekst);


// Oppgave 4
const dyreListe = ['Tiger', 'Gorilla', 'Flodhest'];

// Henter ut liste elementet ul og knappen 
const liste = document.getElementById('ul');
const skrivUtKnapp = document.getElementById('write-list');

/* Variabel for å lage en liste
For hvert liste element, hent ut ul fra HTML filen og gjør det om til en bullet point liste */
const lagListe = () => {
    dyreListe.forEach((listeElement) => (ul.innerHTML += `<li>${listeElement}</li>`));
}

skrivUtKnapp.addEventListener('click', lagListe);


// Oppgave 5
// Variabler for teksten, knappen, drop down valg, og html teksten som blir skrevet ut
const tekst = document.getElementById('text');
const lagKnapp = document.getElementById('create');
const valg = document.getElementById('select');
const htmlTekst = document.getElementById('placeholder');

// Her er en variabel for å endre hvilket element man skal skrive ut teksten som
const endreElement = () => {
    // Variabel for å velge value (h2, h3, span, p)
    const htmlElement = select.value;
    // Variabel for selve tekst value (det man skriver inn i input feltet)
    const melding = text.value;
    /* Her henter jeg ut htmlTekst fra HTML filen, og legger til htmlElementet (h2, h3 osv)
    til teksten ({melding}), og lukker htmlElementet, slik som i en HTML kode.  
    $ er for å escape HTML DOM, slik at jeg kan hente ut JS variabler og legge det i HTML DOM */
    htmlTekst.innerHTML += `<${htmlElement}>${melding}</${htmlElement}>`;
}

lagKnapp.addEventListener('click', endreElement);


// Oppgave 6
const punktListe = document.getElementById('list');
const fjernListe = document.getElementById('remove-li');

// Variabel for å fjerne punktene i lista
const fjernListePunkter = () => {
    // Variabel for å hente ut det siste elementet i punktListe (ul) sin child (sisteElement) (li)
    const sisteElement = punktListe.lastElementChild;
    // Her sier vi at den skal fjerne det siste elementet i listen hvis det finnes et siste element
    if (sisteElement) {
        punktListe.removeChild(sisteElement);
    }
};

fjernListe.addEventListener('click', fjernListePunkter);


// Oppgave 7
const tekstBoks = document.getElementById('name');
const handlingKnapp = document.getElementById('order');

// Variabel for hva som skal skje med teksten til høyre
const handlingTekst = () => {
    const tekstHer = tekstBoks.value;
    // Her sier vi, hvis tekstHer har en lengde på 4 eller mer, gi den en rød ramme på 2px
    if (tekstHer && tekstHer.length >= 4) {
        handlingKnapp.disabled = true;
        handlingKnapp.style = 'border: 2px solid red';
        // Hvis ikke, gi den en svart ramme på 1px
    } else {
        handlingKnapp.disabled = false;
        handlingKnapp.style = 'border: 1px solid black';
    }
};

tekstBoks.addEventListener('keyup', handlingTekst);


// Oppgave 8, byttet ut grønn og rosa med lilla og salmon, hvis det er greit :)
const listePunkter = document.querySelector('.children');
const listeElementer = listePunkter.querySelectorAll('li');
const fargeKnapp = document.getElementById('color');

// Variabel for rammen som skal bli satt på punktene 
const punktRamme = () => {

    
Array.from(listeElementer).forEach((li, index) => {
    // Her sier vi at hvis tallet er delelig på 2, blir det salmon farge
    if ((index + 1) % 2 === 0) {
        li.style = 'border: 2px solid salmon; margin-bottom: 15px; padding: 7px;';
    }
    // Hvis det ikke er delelig på 2, blir det lilla
    else {
        li.style = 'border: 2px solid purple; margin-bottom: 15px; padding: 7px;'; 
    }
    });
};

fargeKnapp.addEventListener('click', punktRamme);


