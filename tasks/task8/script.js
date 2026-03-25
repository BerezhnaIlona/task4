if (confirm('Почати тестування?')) {
  let firstNumb = parseInt(prompt(`Введіть 1 число від 1 до 20`, '1'));
  let secondNumb = parseInt(prompt(`Введіть 2 число від 1 до 20`, '1'));
  let sum = 0;
  if (firstNumb > secondNumb) {
    let temp = firstNumb;
    firstNumb = secondNumb;
    secondNumb = temp;
  }
  firstNumb++;
  do {
    if (firstNumb % 2 !== 0) {
      sum += firstNumb;
    }
    firstNumb++;
  } while (firstNumb < secondNumb);
  document.write(`${sum}`);
}
