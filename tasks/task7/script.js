if (confirm('Почати тестування?')) {
  const userChoose = parseInt(prompt(`Введіть число від 1 до 5`, '1'));
  let guessed = false;
  let chance = 0;
  do {
    let compGuess = Math.floor(Math.random() * 5 + 1);
    if (confirm(`Загадане число ${compGuess}`)) {
      document.write(`Вгадав. Загадане число ${userChoose}`);
      guessed = true;
      break;
    } else chance++;
  } while (chance < 3);
  if (!guessed) document.write(`Не вгадав. Загадане число ${userChoose}`);
}
