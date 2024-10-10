let maximum = parseInt(prompt("masukan angka"));
while (!maximum){
    maximum = parseInt(prompt("angka tidak boleh kosong"));
};
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log (targetNum)

let penebak = parseInt(prompt("masukan tebakan kamu"))
let attempts = 1;
while (parseInt(penebak) !== targetNum){
  attempts++;
  if (penebak > targetNum){
    penebak = prompt("angka tebakan terlalu tinggi")
  } else {
    penebak = prompt("angka tebakan terlalu rendah")
  }
}
alert(`LOVE YOU..`)