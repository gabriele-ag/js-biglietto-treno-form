// Prelevo gli elementi
const formElem = document.getElementById("formBiglietto")
const inputAnni = document.getElementById("anni")
const inputKm = document.getElementById("km")
const buttonElem = document.getElementById("btn-anni")
console.log(inputAnni)

const priceBox = document.querySelector(".final-price")
console.log(priceBox)

// Aggiungo evento al click
buttonElem.addEventListener("click", handleForm)

function handleForm(event) {
    // Evito che ricarichi la pagina
    event.preventDefault();
    console.log("Sì, sono il form");

    // Prelevo i valori dell'input
    const anni = inputAnni.value;
    const km = inputKm.value;
    console.log(anni, km)

    // Conteggio prezzo
    const prezzoBase = 0.21 * km
    console.log(prezzoBase)

    // Definisco lo sconto
    const sconto20 = ((prezzoBase / 100) * 20);
    const sconto40 = ((prezzoBase / 100) * 40);

    // Pongo condizioni per calcolare il prezzo finale
    if (km <= 0) {
        alert(`Si prega di inserire un dato valido`);
    } else if (anni <= 0) {
        alert(`Si prega di inserire un'età valida`);
    } else if (anni < 18) {
        priceBox.innerHTML = `Il prezzo del biglietto è ${(prezzoBase - sconto20).toFixed(2)}€`;
    } else if (anni >= 65) {
       priceBox.innerHTML = `Il prezzo del biglietto è ${(prezzoBase - sconto40).toFixed(2)}€`;
    } else if (anni >= 18) {
       priceBox.innerHTML = `Il prezzo del biglietto è ${(prezzoBase).toFixed(2)}€`;
    }

    // Resetto i campi del form
    formElem.reset()

}

// const numchilometri = prompt("Quanti chilometri?")
// console.log(parseInt(numchilometri));

// const etàpasseggero = prompt("Quanti anni hai?");
// console.log(parseInt(etàpasseggero));

// const prezzodelbiglietto = 0.21 * parseInt(numchilometri);
// console.log(prezzodelbiglietto);

// const sconto20 = ((prezzodelbiglietto / 100) * 20);
// const sconto40 = ((prezzodelbiglietto / 100) * 40);

// let message;


// if (numchilometri <= 0) {
//      message = `Si prega di inserire un dato valido`;
//  } else if (etàpasseggero <= 0) {
//      message = `Si prega di inserire un'età valida`;
//  } else if (etàpasseggero < 18) {
//      message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto20).toFixed(2)}€`;
//  } else if (etàpasseggero >= 65) {
//      message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto40).toFixed(2)}€`;
//  } else if (etàpasseggero >= 18) {
//      message = `Il prezzo del biglietto è ${(prezzodelbiglietto).toFixed(2)}€`;
//  }
