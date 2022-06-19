window.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.js-hamburger');
    const navPanel = document.querySelector('.nav');
    const navCloseBtn = document.querySelector('.js-nav-close');
    const navOverlay = document.querySelector('.nav__overlay');

    hamburger.addEventListener('click', function(e){
        e.preventDefault();

        navPanel.classList.add('is-active');
        document.body.classList.add('body-no-scroll');
    });

    navCloseBtn.addEventListener('click', function(el){
        el.preventDefault();

        navPanel.classList.remove('is-active');
        document.body.classList.remove('body-no-scroll');
    });
    navOverlay.addEventListener('click', function (el) {
        el.preventDefault();

        navPanel.classList.remove('is-active');
        document.body.classList.remove('body-no-scroll');
    });


    // nav
    const navItem = document.querySelectorAll('.nav__item');
    navItem[0].classList.add('is-open');

    navItem.forEach(function(el){
        el.addEventListener('click', toggleNav);
    });

    // nav accordian
    function toggleNav(el) {
        const target = el.currentTarget;
        el.preventDefault();

        if (target.classList.contains('is-open')) {
            target.classList.remove('is-open');
        } else {
            navItem.forEach(function (el) {
                el.classList.remove('is-open');
            });

            target.classList.add('is-open');
        }
    }
});