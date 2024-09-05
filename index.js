const display = document.getElementById('display');
const buttons = document.querySelectorAll('#btnNumber');
const btnDelete = document.getElementById('btnDelete');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const themeA = document.getElementById('themeA');
const themeB = document.getElementById('themeB');
const themeC = document.getElementById('themeC');
const body = document.querySelector('body');
const buttonsBox = document.querySelector('.buttons');
const operationsBtn = document.querySelector('.operationsBtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

result.addEventListener('click', () => {
    if (display.value === '') {
        display.value = '';
    } else {
        const calculate = eval(display.value)
        display.value = calculate;
    };
});

btnDelete.addEventListener('click', () => {
    display.value = display.value.slice(0, -1)
});

reset.addEventListener('click', () => {
    display.value = '';
});

//Configuracoes de temas


themeA.addEventListener('click', () => {
    if (themeA.checked = true) {
        themeB.checked = false;
        themeC.checked = false;
        body.className = 'THEMEA';
        display.style.backgroundColor = 'rgb(36, 9, 62)';
        display.style.color = 'white';
        buttonsBox.style.backgroundColor = 'rgb(56, 20, 92)';
        operationsBtn.style.backgroundColor = 'rgb(56, 20, 92)';

        buttons.forEach(button => {
            button.style.color = 'rgb(56, 20, 92)';
            button.style.backgroundColor = '';
            button.style.textShadow = '';
            button.style.boxShadow = '';
            button.style.borderBottom = '2px solid #ccc';
        });
        return
    }
});

themeB.addEventListener('click', () => {
    if (themeB.checked = true) {
        themeA.checked = false;
        themeC.checked = false;
        body.className = 'THEMEB';
        display.style.backgroundColor = '#ccc';
        display.style.color = 'black';
        buttonsBox.style.backgroundColor = '#000';
        operationsBtn.style.backgroundColor = '#000';

        buttons.forEach(button => {
            button.style.backgroundColor = '#292929';
            button.style.color = '#ccc';
            button.style.textShadow = '0';
            button.style.boxShadow = '0';
            button.style.border = '0';
            button.style.borderBottom = '2px solid transparent';
        })
        return
    };
});

themeC.addEventListener('click', () => {
    if (themeC.checked = true) {
        themeA.checked = false;
        themeB.checked = false;
        body.className = 'THEMEC';
        display.style.backgroundColor = '#fff';
        display.style.color = 'black';
        buttonsBox.style.backgroundColor = '#ffff';
        operationsBtn.style.backgroundColor = '#ffff';

        buttons.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = '#292929';
            button.style.textShadow = '0 0 3px rgba(0, 0, 0, 0.2)';
            button.style.boxShadow = '0 0 7px rgba(0, 0, 0, 0.5)';
            button.style.border = '0';
            button.style.borderBottom = '2px solid transparent';
        });
        return
    }
});


setTimeout(() => {
const confirmacao  = confirm(`Quer ver o código fonte desse projeto?`);

if (confirmacao === true) {
    window.location.href = "https://github.com/CODE-CRAFT-WEB-SISTEM/CalcJS2.0";
}

}, 5000);