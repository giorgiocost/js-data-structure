function Queue() {
    var items = [];

    this.enqueue = function(element) {
        // adicionar um novo item
        items.push(element);
    }

    this.dequeue = function() {
        // remove um item
        return items.shift();
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
        return items[0];
    }

    this.isEmpty = function() {
        // verifica se a fila está vazia
        return !Object.values(items).length;
    }

    this.size = function() {
        // retorna o tamanho da fila
        return items.length;
    }

    this.print = function() {
        // imprime a fila no console
        console.log(items.toString());
    }
}

var fila = new Queue();

fila.enqueue('Laranja');
fila.enqueue('Bananar');
fila.enqueue('Limão');
console.log(fila.front());

fila.print();

fila.dequeue();

fila.print();
console.log(fila.isEmpty());
console.log(fila.size());
