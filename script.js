const closeButton = document.querySelector('.btn-nav-close');
const openBtn = document.querySelector('.btn-nav-open');

const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
    console.log('hi');
}); 

openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open');

})