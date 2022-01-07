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
