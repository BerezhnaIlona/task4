if (confirm('Почати тестування?')) {
  let numbOfImg1 = Math.floor(Math.random() * 4 + 1);
  let numbOfImg2 = Math.floor(Math.random() * 4 + 1);
  let numbOfImg3 = Math.floor(Math.random() * 4 + 1);

  document.write(` <ul>
      <li> <img src="../task10/img/${numbOfImg1}.png" alt=""></li>
      <li> <img src="../task10/img/${numbOfImg2}.png" alt=""></li>
      <li> <img src="../task10/img/${numbOfImg3}.png" alt=""></li>
    </ul>`);

  if (numbOfImg1 === numbOfImg2 && numbOfImg2 === numbOfImg3) {
    switch (numbOfImg1) {
      case 1:
        document.write('Виграш становить 100 грн');
        break;
      case 2:
        document.write('Виграш становить 200 грн');
        break;
      case 3:
        document.write('Виграш становить 300 грн');
        break;
      case 4:
        document.write('Виграш становить 1000 грн');
        break;
    }
  } else document.write('Нажаль ви нічого не виграли');
}
