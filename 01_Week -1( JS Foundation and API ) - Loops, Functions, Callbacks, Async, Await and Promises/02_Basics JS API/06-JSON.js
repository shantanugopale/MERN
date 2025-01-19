function jsonMethods(jsonString) {
    console.log("Original String " + jsonString);

    // Parsing JSON string to JavaScript object
    let parseObject = JSON.parse(jsonString);
    console.log("Parse Object ", parseObject);

    // Stringifying JavaScript object to JSON string
    let StringfyObject = JSON.stringify(parseObject);
    console.log("Stringfy Object ", StringfyObject);
}

const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
