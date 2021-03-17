function myFunction(myObj, checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not Found";
    }
}
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go on", genre: "drama" }, "title"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go on", genre: "drama" }, "song"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go on", genre: "drama" }, "genre"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go on", genre: "drama" }, "actor"));


module.exports = myFunction;