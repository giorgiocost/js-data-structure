function result(element, value) {
    document.querySelector(element).innerText = value;
}

function create(element) {
    var node = document.createElement(element);
    document.getElementById("myList").appendChild(node);
}

function list(initial, array) {
    document.querySelectorAll('li')[initial-4].innerHTML = array[initial-4];
}

function createListDaysOfWeek(array) {
    for ( var initial = 0; initial < array.length; initial++) {
        create('li');
    } 
}

function listDayOfWeek(array) {
    for ( var initial = 4; initial < array.length+4; initial++) {
        list(initial, array);
    }
}
