if (confirm('Почати тестування?')) {
  document.write('<table>');
  document.write('<tbody>');
  document.write('<tr>');
  for (let i = 1; i <= 7; i++) {
    document.write(`<td>${i}</td>`);
  }
  document.write('</tr>');
  document.write('</tbody>');
  document.write('</table>');
}
