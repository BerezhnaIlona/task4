if (confirm('Почати тестування?')) {
  const num_paragraphs = parseInt(prompt('Введіть кількість абзаців: ', '0'));
  for (let i = 1; i <= num_paragraphs; i++) {
    document.write(`<div class='title-task'>`);
    document.write(`<h1>Заголовок ${i}</h1>`);
    for (let j = 1; j <= i; j++) {
      document.write(`
      <p>Розділ ${i}, параграф ${j}</p><hr>`);
    }
    document.write(`</div>`);
  }
}
