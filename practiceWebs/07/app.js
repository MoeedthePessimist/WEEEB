const linksOption = document.querySelectorAll('.links li');
const links = document.querySelector('.links');

const showMenu = () => {
    const menuIcon = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        links.classList.toggle('links-show');
        // console.log('function is being called');
        linksOption.forEach((link, index) => {
            if(!links.classList.contains('links-show'))
                // link.style.animation = `animateLinksHide 1s ease forwards ${index / 7 + 0.5}s`;
                link.style.animation = '';
            else
                link.style.animation = `animateLinksShow 1s ease forwards ${index / 7 + 0.5}s`;
        });
    });
};

linksOption.forEach(link => {
    link.addEventListener('click', function() {
        links.classList.toggle('links-show');
    })
})

showMenu();

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});