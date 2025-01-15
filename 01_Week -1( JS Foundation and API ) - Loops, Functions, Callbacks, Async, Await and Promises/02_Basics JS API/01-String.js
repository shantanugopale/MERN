// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Length
function checkLen(str) {
    console.log("Original String:" + str);
    console.log(str.length);
}

checkLen("Shantanu Gopale");


// indexOf()
function checkIndex(str, char) {
    console.log("Orignal String : " + str);
    console.log("Index is : " + str.indexOf("G"));
}

checkIndex("Shantanu Gopale", "G");


// lastIndexOf()
function checkLastIndex(str, char) {
    console.log("Orignal String : " + str);
    console.log("Index is : " + str.lastIndexOf("G"));
}

checkLastIndex("Shantanu Gopale, Shantanu Dnyaneshwar Gopale", "G");


// slice()
function funcSlice(str) {
    console.log("Original String : " + str);
    console.log(str.slice(1, 5));
}

funcSlice("Shantanu Gopale");


// substring()
function funcSubstr(str) {
    console.log("Original String : " + str);
    console.log(str.substring(1, 5));
}

funcSubstr("Shantanu Gopale");


// replace()
function funReplace(str, replace) {
    console.log("Original String : " + str);
    console.log(str.replace("SDE", "SWE"));
}

funReplace("Shantanu Gopale:SDE");


// split()
function funcSplit(str) {
    console.log("Original String : " + str);
    console.log(str.split(","));
}

funcSplit("Shantanu, Rahul, Aman, Rohit");


// trim()
function funcTrim(str) {
    console.log("Original String :" + str);
    console.log(str.trim());
}

funcTrim("          Shantanu Gopale Software Development Engineer           ");


// toUpperCase()
function funcUpperCase(str) {
    console.log("Original String: " + str);
    console.log(str.toUpperCase());
}

funcUpperCase("shantanu gopale");


// toLowerCase()
function funcLowerCase(str) {
    console.log("Original String: " + str);
    console.log(str.toLowerCase());
}

funcLowerCase("ShAnTaNu GoPaLe");