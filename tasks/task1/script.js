if (confirm('Почати тестування?')) {
  // змінна генерувати число
  // дызнатись парне чи ні
  // як цикл закінчився перевірити яка сума більше
  let evenNumber = 0;
  let oddNumber = 0;
  for (let i = 1; i <= 5; i++) {
    let userNumb = parseInt(prompt(`Введіть число`, '1'));
    userNumb % 2 === 0 ? evenNumber++ : oddNumber++;
  }
  evenNumber > oddNumber ? document.write('Парних чисел більше чим непарних') : document.write('Парних чисел менше чим непарних');
}
