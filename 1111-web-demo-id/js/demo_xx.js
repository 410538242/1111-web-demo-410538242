function showpage(index) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="./demo/w02/" width="100%" height="100%" />`;
      break;
    case 2:
      p.innerHTML = `<iframe src="./demo/w03/card_xx.html" width="100%" height="100%" />`;
      break;
    case 3:
      p.innerHTML = `<iframe src="./demo/w05/blog_xx.html" width="100%" height="100%" />`;
      break;
    case 4:
      p.innerHTML = `<iframe src="./demo/w06/blog_xx.html" width="100%" height="100%" />`;
      break;
    case 5:
      p.innerHTML = `<iframe src="./demo/w08/landing_xx.html" width="100%" height="100%" />`;
      break;
    case 6:
      p.innerHTML = `<iframe src="./demo/w09/multipage_xx.html" width="100%" height="100%" />`;
      break;
  }
}
