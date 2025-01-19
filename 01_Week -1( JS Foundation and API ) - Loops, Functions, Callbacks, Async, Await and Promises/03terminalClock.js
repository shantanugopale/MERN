//  Create a terminal clock (HH:MM:SS)

setInterval(() => {
    let myTime = new Date().toLocaleTimeString();
    console.log(myTime);
}, 1000);