var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}

function myFunction(param, value) {

    lion[param] = value;

    return lion;
}

console.log(myFunction("roar", "roar-roar"));

module.exports = myFunction;