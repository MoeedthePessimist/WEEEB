const menu = document.querySelector('.menu');
const sideMenu = document.querySelector('.links');
const links = document.querySelectorAll('.links li');


const showMenu = () => {
    menu.addEventListener('click', function() {
        // console.log('function is being called');
        // console.log(sideMenu);
        sideMenu.classList.add('show');
        links.forEach(link => {
            link.classList.toggle('show-links');
        });
    });
}

showMenu();