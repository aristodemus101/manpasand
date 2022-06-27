const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close = getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

