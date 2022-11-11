const navbar = document.querySelector('#navbar');

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

function showAnswer(index) {
  const p = document.querySelector('.show-answer-section');
  console.log('p', p);

  switch (index) {
    case 2:
      p.innerHTML = `<iframe src="./p2_42/p2_42.html" width="100%" height="100%" />`;
      break;
      case 3:
      p.innerHTML = `<iframe src="./p3-42/p3_42.html" width="100%" height="100%" />`;
      break;
      case 4:
      p.innerHTML = `<iframe src="./p4_42/p4_42.html" width="100%" height="100%" />`;
      break;
      case 5:
      p.innerHTML = `<iframe src="./p5_42/p5_42.html" width="100%" height="100%" />`;
      break;
  }
}
