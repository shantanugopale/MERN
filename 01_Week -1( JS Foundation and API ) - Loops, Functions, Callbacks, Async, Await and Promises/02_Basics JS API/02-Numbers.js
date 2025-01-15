function explainParseInt(str) {
    console.log("Original Value: " + str);
    const result = parseInt(str);
    console.log(parseInt(result));
}

explainParseInt("123");
explainParseInt("123px");
explainParseInt("123. 416");

function explainParseFloat(str) {
    console.log("Original Value : " + str);
    const result = parseFloat(str);
    console.log(result);
}

explainParseFloat("10");
explainParseFloat("10px");
explainParseFloat("10.174724");