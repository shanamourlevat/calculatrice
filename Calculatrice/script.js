
var number;

function setDot() {
    number = document.getElementById("screen").value;
    number = number + ".";
    document.getElementById("screen").value = number;
    return false;
}

function setOne() {
    number = document.getElementById("screen").value;
    number = number + "1";
    document.getElementById("screen").value = number;
    return false;
}

function setTwo() {
    number = document.getElementById("screen").value;
    number = number + "2";
    document.getElementById("screen").value = number;
    return false;
}

function setThree() {
    number = document.getElementById("screen").value;
    number = number + "3";
    document.getElementById("screen").value = number;
    return false;
}
function setFour() {
    number = document.getElementById("screen").value;
    number = number + "4";
    document.getElementById("screen").value = number;
    return false;
}
function setFive() {
    number = document.getElementById("screen").value;
    number = number + "5";
    document.getElementById("screen").value = number;
    return false;
}
function setSix() {
    number = document.getElementById("screen").value;
    number = number + "6";
    document.getElementById("screen").value = number;
    return false;
}
function setSeven() {
    number = document.getElementById("screen").value;
    number = number + "7";
    document.getElementById("screen").value = number;
    return false;
}
function setEight() {
    number = document.getElementById("screen").value;
    number = number + "8";
    document.getElementById("screen").value = number;
    return false;
}
function setNine() {
    number = document.getElementById("screen").value;
    number = number + "9";
    document.getElementById("screen").value = number;
    return false;
}
function setZero() {
    number = document.getElementById("screen").value;
    number = number + "0";
    document.getElementById("screen").value = number;
    return false;
}
function clearScreen() {
    document.getElementById("screen").value = "";
    return false;
}

function addup() {
    number = document.getElementById("screen").value;

    if (number == "") {
        document.getElementById("plus").innerHTML = "<h4>Please input the correct data </h4>";
    }
    else {
        number = number + "+";
        document.getElementById("screen").value = number;
        document.getElementById("plus").innerHTML = "";
    }
    return false;
}

function sub() {
    number = document.getElementById("screen").value;
    if (number == "") {
        document.getElementById("minus").innerHTML = "<h4>Please input the correct data </h4>";
    }
    else {
        number = number + "-";
        document.getElementById("screen").value = number;
        document.getElementById("minus").innerHTML = "";
    }
    return false;
}

function times() {
    number = document.getElementById("screen").value;

    if (number == "") {
        document.getElementById("mult").innerHTML = "<h4>Please input the correct data </h4>";
    }
    else {
        number = number + "*";
        document.getElementById("screen").value = number;
        document.getElementById("mult").innerHTML = "";
    }
    return false;
}

function division() {
    number = document.getElementById("screen").value;

    if (number == "") {
        document.getElementById("divi").innerHTML = "<h4>Please input the correct data </h4>";
    }
    else {
        number = number + "/";
        document.getElementById("screen").value = number;
        document.getElementById("divi").innerHTML = "";
    }
    return false;
}

function roots() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.sqrt(number);
    return false;
}

function sine() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.sin(number);
    return false;
}

function cosine() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.cos(number);
    return false;
}

function tang() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.tan(number);
    return false;
}
function log() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.log10(number);
    return false;
}
function ln() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.log(number);
    return false;
}
function racine() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.sqrt(number);
}
function pi() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.pi(number);
}

function answer() {
    number = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(number);
    document.getElementById("title").innerHTML = "<h2>Your result :</h2>";
    return false;
}

function backSpace() {
    number = document.getElementById("screen").value;
    var str = number;
    var res = str.substring(0, str.length - 1);
    document.getElementById("screen").value = res;

    return false;
}