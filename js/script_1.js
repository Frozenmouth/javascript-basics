answer = prompt('Quel est ton nom étranger?');
console.log(`Bonjour à toi ${answer}.`);
console.log("Tu as envie d'utiliser tes talents de h4xxx0r pour afficher les messages cachés dans mes autres scripts ?");
answer2 = prompt(`Bien ${answer}. Alors jeune hacker, tu relèves le défi ? (oui/non)`);
if (answer2 === "oui") {
  console.log(`Tu as fait le bon choix ${answer}. Utilise la barre de navigation pour executer les scripts les uns apres les autres pour découvrir mes plus grands secrets.`);
} else {
  console.log("Ok t'es tout naze, retourne jouer à Candy Crush et laisse moi tranquille.");
};
