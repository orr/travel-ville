function addPanel(node ) {
    node.addEventListener('click', ()=> {
        node.classList.toggle('open');
    });
}

document.querySelectorAll('.gallery-item-container').forEach(addPanel );


document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('.main-header-container nav ').classList.toggle('open');
    document.querySelector('#close-menu').classList.toggle('show');
    document.querySelector('body').classList.toggle('close');

});

document.querySelector('#close-menu').addEventListener('click', () => {
    document.querySelector('.main-header-container nav ').classList.toggle('open');
    document.querySelector('#close-menu').classList.toggle('show');
    document.querySelector('body').classList.toggle('close');

});