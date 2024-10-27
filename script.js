var rows = prompt("Enter a number for rows");

for (var i = 0; i < rows; i++) {
    var str = "";

    for (var j = rows; j > i; j--) {
        str += " ";
    }
    for (var k = 0; k <= i; k++) {
        str += "*";
    }
    for (var l = 1; l <= i; l++) {
        str += "*";
    }
    console.log(str);
}
for (var i = rows - 2; i >= 0; i--) {
    var str = "";

    for (var j = rows; j > i; j--) {
        str += " ";
    }
    for (var k = 0; k <= i; k++) {
        str += "*";
    }
    for (var l = 1; l <= i; l++) {
        str += "*";
    }
    console.log(str);
}
