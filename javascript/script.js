// const numchilometri = prompt("Quanti chilometri?")
// console.log(parseInt(numchilometri));

// const etàpasseggero = prompt("Quanti anni hai?");
// console.log(parseInt(etàpasseggero));

const prezzodelbiglietto = 0.21 * parseInt(numchilometri);
console.log(prezzodelbiglietto);

const sconto20 = ((prezzodelbiglietto / 100) * 20);
const sconto40 = ((prezzodelbiglietto / 100) * 40);

let message;


if (numchilometri <= 0) {
    message = `Si prega di inserire un dato valido`;
} else if (etàpasseggero <= 0) {
    message = `Si prega di inserire un'età valida`;
} else if (etàpasseggero < 18) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto20).toFixed(2)}€`;
} else if (etàpasseggero >= 65) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto40).toFixed(2)}€`;
} else if (etàpasseggero >= 18) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto).toFixed(2)}€`;
}
