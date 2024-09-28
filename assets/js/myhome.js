window.addEventListener('scroll', function() {
    const boxHeader = document.getElementById('Box__Header');

    if (window.scrollY > 0) {
        boxHeader.classList.add('Box__Header-Animation');
        boxHeader.classList.remove('Box__Header-Normal');
    } else {
        boxHeader.classList.add('Box__Header-Normal');
        boxHeader.classList.remove('Box__Header-Animation');
    }
});
