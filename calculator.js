var operator = "";
var number1 = 0;
var number2 = 0;
var check = false;
var counter = 0;
document.getElementById("display").value = "0";

//var p= document.getElementById("display").value;
//if(document.getElementById("display").value.length>12){
//   alert("You are not allowed to Enter more that 12 digit");
//}
//

function operation(object) {
    operator = object.getAttribute("value");
    check = false;
    counter = 0;
}

function clearAll() {
    document.getElementById("display").value = "0";
    operator = "";
    number1 = 0;
    number2 = 0;
    check = false;
    counter = 0;
}

function enterDecimal() {

    check = true;
    counter = 1;
}

function enterText(object) {

    var available = document.getElementById("display").value;


    var temp = parseFloat(object.getAttribute("value"));
    var c = 0;
    var a = 0;
    var b = 0;
    if (operator.length == 0) {
        if (check) {
            var tempCounter = counter;
            while (counter != 0) {
                temp = temp / 10;
                counter = counter - 1;
            }
            number1 = number1 + temp;
            counter = tempCounter + 1;
        } else {
            number1 = number1 * 10 + temp;
        }
        if (number1.toString().length>12) {
            alert("You are not allowed to Enter more that 12 digit");
            return;
        }
        document.getElementById("display").value = "";
        document.getElementById("display").value = number1;
    } else if (operator == "null") {
        number1 = 0;
        operator = "";
        if (check) {
            var tempCounter = counter;
            while (counter != 0) {
                temp = temp / 10;
                counter = counter - 1;
            }
            number1 = number1 + temp;
            counter = tempCounter + 1;
        } else {
            number1 = number1 * 10 + temp;
        }
        if (number1.toString().length>12) {
            alert("You are not allowed to Enter more that 12 digit");
            return;
        }
        document.getElementById("display").value = "";
        document.getElementById("display").value = number1;

    } else {
        if (check) {
            var tempCounter = counter;
            while (counter != 0) {
                temp = temp / 10;
                counter = counter - 1;
            }
            number2 = number2 + temp;
            counter = tempCounter + 1;
        } else {
            number2 = number2 * 10 + temp;
        }
        if (number2.toString().length>12) {
            alert("You are not allowed to Enter more that 12 digit");
            return;
        }
        document.getElementById("display").value = "";
        document.getElementById("display").value = number2;
    }
}


function result() {

    var c = 0;

    if (operator == "+") {
        c = number1 + number2;
        number1 = c;
        number2 = 0;
        operator = "";
    } else if (operator == "-") {
        c = number1 - number2;
        number1 = c;
        number2 = 0;
        operator = "";
    } else if (operator == "X") {
        c = number1 * number2;
        number1 = c;
        number2 = 0;
        operator = "";

    } else if (operator == "/") {
        c = number1 / number2;
        number1 = c;
        number2 = 0;
        operator = "";
    }

    document.getElementById("display").value = c;
    operator = "null";
    check = false;
    counter = 0;

}

function independent(object) {
    operator = object.getAttribute("value");
    if (operator == "%") {
        c = number1 / 100;
        number1 = c;
        number2 = 0;

    } else if (operator == "inverse") {
        c = number1 * (-1);
        number1 = c;
        number2 = 0;

    }
    document.getElementById("display").value = c;
    operator = "null";
    check = false;
    counter = 0;
}
