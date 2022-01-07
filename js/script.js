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

function listArrayBidirectional(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array[i].length; j++) {
            console.log("🚀 ~ file: array.js ~ line", array[i][j]);
        }
    }
}

function listArrayThreeDimensional() {
    for (var x = 0; x < month.length; x++) {
        for( var y = 0; y < month[x].length; y++) {
            for( var z = 0; z < month[x][y].length; z++) {
                console.log(`month - ${z}`, month[x][y][z]);
            }
        }
    }    
}