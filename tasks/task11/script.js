if (confirm('Почати тестування?')) {
  const shopRow = Math.floor(Math.random() * 5 + 1);
  const shopColumn = Math.floor(Math.random() * 5 + 1);

  let hit = false;

  for (let i = 0; i < 5; i++) {
    let shot1 = parseInt(prompt(`Введіть число від 1 до 10`, '1'));
    let shot2 = parseInt(prompt(`Введіть число від 1 до 10`, '1'));
    if (shot1 === shopRow && shot2 === shopColumn) {
      document.write(`Ви потопили корабель!<br>`);
      hit = true;
      break;
    } else {
      document.write(`Промах<br>`);
    }
  }
  if (!hit) {
    document.write(`Корабель не потоплено.<br>`);
    document.write(`Він був на: ${shipRow}, ${shipColumn}`);
  }
}
