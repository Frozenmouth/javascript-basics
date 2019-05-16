function pyramid() {
let number = prompt("Salut, bienvenue dans ma super pyramide! Combien d'étages veux-tu ?");
let i = 1;
let block = "#";
let space = " ";
while (i <= number) {
  console.log(space.repeat((number - i )) + block.repeat(i++));
}
console.log(" ");
};

pyramid()
