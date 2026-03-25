if (confirm('Почати тестування?')) {
  document.write('<table>');
  document.write('<tbody>');
  for (let i = 1; i <= 3; i++) {
    document.write(`<tr></tr>`);
    for (let j = 1; j <= 7; j++) {
      document.write(`<td>${j}</td>`);
    }
  }
  document.write('</tbody>');
  document.write('</table>');
}
