function showpage(index) {

    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(index) {
        case 1:
            p.innerHTML =`<iframe src="./demo/w02/w02 index.html" width="100%" height="100%" >`
        break;
        case 2:
            p.innerHTML =`<iframe src="./demo/w03/card_42.html" width="100%" height="100%" >`
        break;
        case 3:
            p.innerHTML =`<iframe src="./demo/w05/blog_42.html" width="100%" height="100%" >`
        break;
        case 4:
            p.innerHTML =`<iframe src="./demo/w06/blog_42.html" width="100%" height="100%" >`
        break;
        case 4:
            p.innerHTML =`<iframe src="./demo/w06/blog_42.html" width="100%" height="100%" >`
        break;
        case 5:
            p.innerHTML=`<iframe src="./demo/w08/landing_42.html" width="100%" height="100%" >`
        break;
        case 6:
            p.innerHTML=`<iframe src="./demo/w09/resume(eg)_42.html" width="100%" height="100%" >`
        break;
        case 7:
            p.innerHTML =`<iframe src="./projects/midtern/works_42.html" width="100%" height="100%" >`
        break;
        case 8:
            p.innerHTML =`<iframe src="./projects/midtern/resume(me)_42.html" width="100%" height="100%" >`
        break;
        case 9:
            p.innerHTML =`<iframe src="./projects/midtern/learning_42.html" width="100%" height="100%" >`
        break;
    
    }
}