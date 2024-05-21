const main = document.querySelector('main');
const body = document.querySelector('body');
const form = document.querySelector('form');
const inputMail = document.querySelector('#input');
const contentMain = document.querySelector('.contentMain');
const header = document.querySelector('header');
const divLabel = document.querySelector('.label-div');
const textError = document.createElement('p');  
const container = document.querySelector('.container');

console.log(body);

function create() {
    const thanksDiv = document.createElement('div');
    const svg = document.createElement('img');
    const h2 = document.createElement('h2');
    const desc = document.createElement('p');
    const btn = document.createElement('button');
    svg.src = 'assets/img/Path2.svg';
    svg.alt = 'logo';
    h2.textContent = "Thanks for subscribing!";
    desc.textContent = `A confirmation email has been sent to ${inputMail.value}. Please open it and click the button inside to confirm your subscription`;
    btn.textContent = "Dismiss Message";
    svg.classList.add('svg-css');
    h2.classList.add('h2-css');
    container.classList.add('container2')
    thanksDiv.classList.add('congrats');
    desc.classList.add('desc-text');
    btn.classList.add('submit2');
    thanksDiv.appendChild(svg);
    thanksDiv.appendChild(h2);
    thanksDiv.appendChild(desc);
    thanksDiv.appendChild(btn);
    main.appendChild(thanksDiv);
    contentMain.classList.add('hidden');
    header.classList.add('hidden');
    btn.addEventListener('click', function() {
        refresh();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputMail.value == "" || !isValidEmail(inputMail.value)) {
        inputMail.classList.add('non');
        textError.textContent = "Valid email required";
        textError.classList.remove('hidden');
        textError.classList.add('error');
        divLabel.appendChild(textError);
    } else {
        create();
    }
});

function refresh() {
    window.location.reload(false); 
}
