const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/* 1 */ let itBe = [] // Affiche les entrepreneurs nés dans les 70's
/* 1 */ entrepreneurs.forEach(man => {
/* 1 */  if (man.year.toString().match(/197/)){
/* 1 */    itBe.push(man); }
/* 1 */ });
/* 1 */  console.log(itBe)

/* 2 */ let itRain = [] // Affiche le nom et prénom de chaque entrepreneur
/* 2 */ entrepreneurs.forEach(man => {
/* 2 */   itRain.push(man.first + " " + man.last);
/* 2 */ });
/* 2 */   console.log(itRain)

/* 3 */ entrepreneurs.forEach(man => { // Affiche l'âge de chaque entrepreneur
/* 3 */   let age = 2019 - (man.year)
/* 3 */   console.log(`En 2019, ${man.first} ${man.last} aurait ${age} ans.`)
/* 3 */ });

/* 4 */ console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last))); // Classe les entrepeneurs par nom de famille
