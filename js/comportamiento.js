
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

// VALIDAR INPUTS EN TIEMPO REAL

document.addEventListener('DOMContentLoaded', function () {
    // DEFINE INPUTS QUE SE VAN A VALIDAR
    const campos = {
        name: {
            input: document.getElementById('name'),
            validar: valor => valor.trim() !== '',
            mensaje: 'El nombre es obligatorio.'
        },
        surname: {
            input: document.getElementById('surname'),
            validar: valor => valor.trim() !== '',
            mensaje: 'El apellido es obligatorio.'
        },
        mail: {
            input: document.getElementById('mail'),
            validar: valor => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(valor),
            mensaje: 'El correo no es válido.'
        },
        cod_area: {
            input: document.getElementById('cod_area'),
            validar: valor => /^[0-9\s\-]+$/.test(valor),
            mensaje: 'Solo se permiten números.'
        },
        tel: {
            input: document.getElementById('tel'),
            validar: valor => /^[0-9\s\-]+$/.test(valor),
            mensaje: 'El número contiene caracteres inválidos.'
        },
    };

    // AGREGA LISTENER A INPUTS
    for (let campo in campos) {
        const { input, validar, mensaje } = campos[campo];
        const evento = input.tagName === 'SELECT' ? 'change' : 'input';

        input.addEventListener(evento, () => {
            if (validar(input.value)) {
                limpiarError(input);
            } else {
                mostrarError(input, mensaje);
            }
        });
    }

    // MUESTRA EL ERROR
    function mostrarError(input, mensaje) {
        input.classList.add('error');
        let error = input.parentNode.querySelector('.mensaje-error');
        if (error) {
            error.textContent = mensaje;
        }
    }

    // BORRA EL ERROR
    function limpiarError(input) {
        input.classList.remove('error');
        const error = input.parentNode.querySelector('.mensaje-error');
        if (error) {
            error.textContent = '';
        }
    }
});
