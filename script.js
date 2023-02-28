const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".special");

let display = document.getElementById('display');
let displayValue = 0;
let operator;


function pow(x, y)
{
    return Math.pow(x, y);
}

function add(x, y)
{
    return (x + y);
}

function sub(x, y)
{
    return (x - y);
}

function mul(x, y)
{
    return (x * y);
}

function divide(x, y)
{
    return y != 0 ? (x / y) : "nope";
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
        case '^':
            return pow(x, y);
        default:
            return;
    }
}

function popDisplay()
{
    if(display.textContent === '0' || !isFinite(display.textContent) || (operator && Number(display.textContent) === displayValue))
        display.textContent = this.textContent;
    else if(display.textContent.length < 9)
        display.textContent += this.textContent;
}

function operations()
{
    switch(this.textContent){
        case "+/-":
            display.textContent *= -1;
            break;
        case "AC":
            display.textContent = 0;
            displayValue = 0;
            operator = 0;
            break;
        case "C":
            display.textContent = display.textContent
                                    .split('')
                                    .splice(0, display.textContent.length -1)
                                    .join('');
            break;
        case ".":
            if (!display.textContent.split('').find(a => a === "."))
                display.textContent += '.';
            break;
        default:
            if(!operator && this.textContent != '=' && isFinite(display.textContent))
            {
                displayValue = display.textContent;
                operator = this.textContent;
                
                display.textContent = '';
            }
            else if(operator)
            {
                displayValue = operate(Number(displayValue), operator, Number(display.textContent));
                if(displayValue >= 1e+9)
                    displayValue = displayValue.toExponential(1);
                display.textContent = displayValue;
                if(this.textContent != '=')
                    operator = this.textContent;
                else
                    operator = '';
            }    
            break;
    }
}

numbers.forEach(a => a.addEventListener('click', popDisplay));
operators.forEach(a => a.addEventListener('click', operations))

