if (confirm('Почати тестування?')) {
  const shipRow = Math.floor(Math.random() * 5 + 1);
  const shipColumn = Math.floor(Math.random() * 5 + 1);

  let hit = false;

  for (let i = 0; i < 5; i++) {
    let shot1 = parseInt(prompt(`Введіть число від 1 до 5`, '1'));
    let shot2 = parseInt(prompt(`Введіть число від 1 до 5`, '1'));
    if (shot1 === shipRow && shot2 === shipColumn) {
      document.write(`Ви потопили корабель!<br>`);
      hit = true;
      break;
    } else {
      alert(`Промах`);
    }
  }
  if (!hit) {
    document.write(`Корабель не потоплено.<br>`);
    document.write(`Він був на: ${shipRow}, ${shipColumn}`);
  }
}
