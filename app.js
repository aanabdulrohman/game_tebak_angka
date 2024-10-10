let maximum = parseInt(prompt("masukan nilai maximum"));
while (!maximum){
    maximum = parseInt(prompt("nilai maximum tidak boleh kosong"));
};
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log (targetNum)

let penebak = parseInt(prompt("masukan tebakan kamu"))
let attempts = 1;
while (parseInt(penebak) !== targetNum){
  attempts++;
  if (penebak > targetNum){
    penebak = prompt("Nilai tebakan terlalu tinggi")
  } else {
    penebak = prompt("Nilai tebakan terlalu rendah")
  }
}
alert(`LOVE YOU..`)