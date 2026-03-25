if (confirm('Почати тестування?')) {
  const numbWeek = parseInt(prompt(`Введіть число від 1 до 10`, '1'));
  let totalSum = 0;

  for (let i = 1; i <= numbWeek; i++) {
    let sum = 0;
    for (let j = 0; j < 7; j++) {
      let profit = Math.floor(Math.random() * 500 + 1);
      sum += profit;
    }
    totalSum += sum;
    document.write(`Прибуток за тиждень ${i} становить ${sum}<br>`);
  }
  document.write(`Прибуток за весь час становить ${totalSum}<br>`);
}
