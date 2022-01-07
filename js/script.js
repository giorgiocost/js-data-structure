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

function listArrayBidirecional(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array[i].length; j++) {
            console.log("🚀 ~ file: array.js ~ line", array[i][j]);
        }
    }
}