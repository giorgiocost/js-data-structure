function LinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        // adiciona um elemento no final da lista
        var node = new Node(element),
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
        if (position > -1 && position < length) {
            var current = head,
            previous,
            index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
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
        var current = head,
        string = '';

        while(current) {
            string += current.element + ' ';
            current = current.next;
        }

        return string;
    }

    this.print = function() {
        // imprime no console
        console.log(this.toString());
    }
}

var linkedList = new LinkedList();
linkedList.append('João');
linkedList.append('José');
linkedList.append('Maria');
linkedList.print();
linkedList.removeAt(1);
linkedList.print();