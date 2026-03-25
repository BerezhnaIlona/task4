if (confirm('Почати тестування?')) {
  let firstNumb = parseInt(prompt(`Введіть 1 число від 1 до 100`, '1'));
  let secondNumb = parseInt(prompt(`Введіть 2 число від 1 до 100`, '1'));
  let sum = 0;
  let count = 0;
  // do {
  //   if (firstNumb > secondNumb) {
  //     let temp = firstNumb;
  //     firstNumb = secondNumb;
  //     secondNumb = temp;
  //   }

  //   if (firstNumb % 2 != 0) {
  //     sum += firstNumb;
  //     firstNumb += 1;
  //     count++;
  //   } else firstNumb += 1;
  // } while (firstNumb <= secondNumb || count === 5);
  if (firstNumb > secondNumb) {
    let temp = firstNumb;
    firstNumb = secondNumb;
    secondNumb = temp;
  }

  for (let i = firstNumb + 1; i < secondNumb; i++) {
    // числа між firstNumb і secondNumb
    if (i % 2 !== 0) {
      // непарне число
      sum += i;
    }
  }
  document.write(`${sum}`);
}
