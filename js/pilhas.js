function Stack() {
    var items = [];

    this.push = function(element) {
        // adicionar um novo item a pilha
        items.push(element);
    }

    this.pop = function() {
        // remover o item do topo da pilha
        return items.pop();
    }

    this.peek = function() {
        // devolve o elemento que está no topo da pilha
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        // informa se a pilha está vazia
        return !Object.values(items).length;
    }

    this.clear = function() {
        // limpa a pilha
        items = [];
    }

    this.size = function() {
        // informa o tamanho da pilha
        return items.length;
    }

    this.print = function() {
        // imprime a pilha no console
        console.log(items.toString());
    }
}

var pilha = new Stack();

pilha.push(2);
pilha.push(4);
pilha.push(6);
pilha.push(8);
pilha.push(10);

pilha.pop();

pilha.print();
console.log('devolve o elemento que está no topo da pilha:', pilha.peek());
console.log('informa o tamanho da pilha:', pilha.size());

pilha.clear();
console.log('informa se a pilha está vazia:', pilha.isEmpty());

function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = '';

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

console.log(dec2Bin(25));

function baseConverter(decNumber, base) {
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF';

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}