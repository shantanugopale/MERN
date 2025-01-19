function mathMethods(value) {
    console.log("Original Value " + value);

    let rounded = Math.round(value);
    console.log("Rounded Values: " + rounded);

    let ceilValue = Math.ceil(value);
    console.log("Ceil Values: " + ceilValue);

    let floorValue = Math.floor(value);
    console.log("Floor Values: " + floorValue);

    let randomValue = Math.random();
    console.log("Random Values: " + randomValue);

    let maxValue = Math.max(10, 20, 40);
    console.log("Max Values: " + maxValue);

    let minValue = Math.min(10, 20, 40);
    console.log("Min Values: " + minValue);

    let squaredValue = Math.pow(2, 4);
    console.log("Squared Values: " + squaredValue);

    let sqrtValue = Math.sqrt(64);
    console.log("Square Root Values: " + sqrtValue);
}

mathMethods(6.7);
mathMethods(3.3);