function objectMethod(obj) {
    console.log("Original Object", obj);

    let keys = Object.keys(obj);
    console.log("Keys", keys);

    let values = Object.values(obj);
    console.log("Values", values);

    let entries = Object.entries(obj);
    console.log("Entries", entries);

    let checkProp = obj.hasOwnProperty("firstName");
    console.log("After hasOwnPropery", checkProp); // true / false

    let newObj = Object.assign({}, obj, {
        mobileno: "9876543210",
        Education: "Bachelor's in Computer Science",
    });
    console.log("New Object", newObj);
}

const sampleObject = {
    firstName: "Shantanu",
    lastName: "Gopale",
    age: 21,
    email: "shantanugopale@gmail.com",
};

console.log(sampleObject);

objectMethod(sampleObject);