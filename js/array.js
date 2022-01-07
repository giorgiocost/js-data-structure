var avgTempJan = 31.9;
var avgTempFev = 35.3;
var avgTempMar = 42;
var avgTempApr = 38;
var avgTempMay = 25.5;

result('#variable', avgTempJan);

var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

result('#array', avgTemp[2]);

var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

result('#days-of-week', daysOfWeek[3]);

createListDaysOfWeek(daysOfWeek);

listDayOfWeek(daysOfWeek);

// fibonacci
var fibonacci = [0, 1];

for(var initial = 2; initial < 20; initial++) {
    fibonacci[initial] = fibonacci[initial-2]+fibonacci[initial-1];
}
console.log("🚀 ~ file: array.js ~ line 30 ~ fibonacci", fibonacci);

// inserindo elementos
var numbers = [1, 2, 3, 4, 5, 6, 7];

numbers[2] = 7;

numbers.push(8);

numbers.unshift(0);

numbers.pop();

numbers.shift();

numbers.splice(2, 2); // [1, 2, 7, 4, 5, 6, 7] -> remove 7, 4

numbers.splice(2, 0, 7, 4); // inseri 7, 4

console.log("🚀 ~ file: array.js ~ line 37 ~ numbers", numbers);

var avgTempWeek = [];

var month = [];
var firstWeek = [];
var lastWeek = [];

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

var avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21.6, 15];
var avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

firstWeek = [avgTempWeek1, avgTempWeek2];
lastWeek = [avgTempWeek3, avgTempWeek4];

month = [firstWeek, lastWeek];
console.log("🚀 ~ file: array.js ~ line 68 ~ month", month[1][1][4]);

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;
console.log("🚀 ~ file: array.js ~ line 61 ~ avgTempWeek", avgTempWeek[1][2]);

listArrayBidirectional(avgTempWeek);

listArrayThreeDimensional();