export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open: function() {
        Modal.wrapper.classList.add('open')
    },
    close: function() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = function() {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
    if (e.key == 'Escape') {
        Modal.close()
    }
}