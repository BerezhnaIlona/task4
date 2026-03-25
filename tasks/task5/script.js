if (confirm('Почати тестування?')) {
  let numb = 0;
  let taskCount = 0;
  do {
    document.write('<table>');
    document.write('<tbody>');
    for (let i = 1; i <= 3; i++) {
      document.write(`<tr></tr>`);
      for (let j = 1; j <= 3; j++) {
        numb++;
        document.write(`<td>${numb}</td>`);
      }
    }
    document.write('</tbody>');
    document.write('</table>');
    taskCount++;
  } while (taskCount < 3);
}
