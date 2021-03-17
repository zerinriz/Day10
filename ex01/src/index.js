var myPet = {
    species: "Dog",
    name: "Rex",
    legs: 4,
    friends: ["Jerry", "Tom"]
}
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));

module.exports = { myPet, myFunction };