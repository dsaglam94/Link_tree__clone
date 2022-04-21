let mouseCursor = document.querySelector('.cursor');
let mainTitle = document.querySelector('.main__title');
let linkItems = document.querySelectorAll('.main__links--items');
let footerLogo = document.querySelector('.footer__logo');
let footerCopyright = document.querySelector('.footer__copyright');


// Theme changer & local storage ==============================

let darkMode = localStorage.getItem('dark-mode');
const themeBtn = document.querySelector('.theme-btn');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

if ( darkMode === 'enabled') {
    enableDarkMode();
}

themeBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');

    if ( darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})


// Cursor Movement ==============================

 window.addEventListener('mousemove', cursor);

 function cursor(e) {
     mouseCursor.style.top = e.clientY + "px";
     mouseCursor.style.left = e.clientX + "px";
 }

//  Cursor Grow Effect =============================

    linkItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            mouseCursor.classList.add('cursor-grow');
        });
    
        item.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('cursor-grow');
        }); 
    })
    
    themeBtn.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow');
    })
    
    themeBtn.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
    })
    
    mainTitle.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow');
    })
    
    mainTitle.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
    })
    

//  Loader ==============================

const loader = document.querySelector('.box');
const main = document.querySelector('.main');

function init () {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.pointerEvents = 'all';
        setTimeout(() => (main.style.opacity = 1), 50);

    }, 2500);
}

init();


