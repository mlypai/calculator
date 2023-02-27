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
    return x / y;
}

function operate(x, op, y)
{
    switch(op){
        case '+':
            return add(x, y);
        case '-':
            return sub(x, y);
        case 'x':
            return mul(x, y);
        case '/':
            return divide(x, y);
        default:
            return;
    }
}