function LinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        // adiciona um elemento no final da lista
        var node = new Node(element);
        current;

        if (head == null) {
            head = node;
        } else {
            current = head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    }

    this.inseri = function() {
        // adiciona um elemento em uma posição específica
    }

    this.removeAt = function(position) {
        // remove o elemento de uma posição específica
    }

    this.remove = function(element) {
        // remove o elemento element
    }

    this.indexOf = function(element) {
        // retorna a posição do elemento
    }

    this.isEmpty = function() {
        // retorna se está vazio
    }

    this.size = function() {
        // retorna o tamanho da instancia
    }

    this.toString = function() {
        // converte para string
        var current = head;
        string = '';

        while(current) {
            string += current.element;
            current = current.next;
        }

        return string;
    }

    this.print = function() {
        // imprime no console
        console.log(this.toString);
    }
}