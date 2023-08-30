// Toggle class active
const headList = document.querySelector('.headlist');
// ketika hamburger menu di klik
document.querySelector('#menu-icon').onclick = () => {
    headList.classList.toggle('open')
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu-icon');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !headList.contains(e.target)) {
        headList.classList.remove('open');
    }

});

// scroll down effect
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});