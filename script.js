const numbers = document.querySelectorAll(".number");

let display = document.getElementById('display');
let displayValue;



function add(x, y)
{
    return x + y;
}

function sub(x, y)
{
    return x - y;
}

function mul(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return y != 0 ? x / y : "nope";
}

function operate(x, op, y)
{
    switch(op){
        case '+':
            return add(x, y);
        case '-':
            return sub(x, y);
        case '*':
            return mul(x, y);
        case '/':
            return divide(x, y);
        default:
            return;
    }
}

function popDisplay()
{
    if(display.textContent.length < 9)
        display.textContent += this.textContent;
}

numbers.forEach(a => a.addEventListener('click', popDisplay));
