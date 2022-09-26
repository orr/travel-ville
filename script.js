function addPanel(node ) {
    node.addEventListener('click', ()=> {
        node.classList.toggle('open');
    });
}

document.querySelectorAll('.gallery-item-container').forEach(addPanel );

//document.querySelector('.gallery-item-container').classList.toggle