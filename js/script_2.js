function factorial(answer) {
  let output = "1";
  while (answer > 0) {
    output = output * answer--;
  }
  return output;
}

let number = prompt('De quel nombre veux-tu calculer la factorielle ?');
console.log(`La factorielle de ${number} est ${factorial(number)}`);
