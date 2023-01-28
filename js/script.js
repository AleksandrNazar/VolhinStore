window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 650) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
};