
// DEFINICION DE CONSTANTES
const MODAL = document.querySelector('.modal');
const INFO_MODAL = document.querySelector('.info-modal');

// ESCUCHA DE EVENTOS
document.getElementById('submit').addEventListener('click', openModal);
document.getElementById('btn-cancel').addEventListener('click', closeModal);

// DEFINICION DE FUNCIONES QUE CONTROLAN EL MODAL

/**
 * Funcion que oculta el modal con su transicion
 */
function closeModal() {
    INFO_MODAL.classList.remove("fade-in");
    INFO_MODAL.classList.add("fade-out");

    setTimeout(() => {
        MODAL.style.display = "none";
        INFO_MODAL.classList.remove("fade-out"); // limpia por si se se vuelve a abrir
    }, 400);
}

/**
 * Funcion que muestra el modal con su transicion
 */
function openModal() {
    MODAL.style.display = 'flex';
    MODAL.style.display = "block";
    INFO_MODAL.classList.add("fade-in");
}

/**
 * Muestra placeholders
*/
// document.querySelectorAll('input[data-ph]').forEach(input => {
//     input.addEventListener('focus', () => {
//         input.placeholder = input.getAttribute('data-ph');
//     });

//     input.addEventListener('blur', () => {
//         input.placeholder = '';
//     });
// });
