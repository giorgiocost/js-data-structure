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

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for(var i = 0; i < items.length; i++) {
            if(queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added) {
            items.push(queueElement);
        }
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.print = function() {
        for( var i = 0; i < items.length; i++) {
            console.log(`${items[i].element} ${items[i].priority}`);
        }
    }
}

var pqueue = new PriorityQueue();

pqueue.enqueue('Laranja', 2);
pqueue.enqueue('Banana', 1);
pqueue.enqueue('Limão', 1);
pqueue.print();
