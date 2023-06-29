import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".'

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
        break;
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const startEvenGame = () => {
  gameEngine(question, makelogic);
}

export default startEvenGame;
