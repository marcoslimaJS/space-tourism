
import myJson from '../data.json' assert {type: 'json'};

const teste = document.querySelector(".teste");
console.log(teste)

teste.innerHTML = myJson.crew[0].name

console.log(myJson)