window.onload = function() {
    setTimeout(function() {
        document.querySelector('.home-image').classList.add('show-image');
    }, 100);
};

document.addEventListener('DOMContentLoaded', function() {
    var backToTop = document.getElementById('back-to-top');

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
});


