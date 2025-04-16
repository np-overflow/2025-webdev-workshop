function square(x) {
    return x ** 2
}

const printMenu = () => {
    console.log("NullFlow Menu")
    console.log("Grilled Beef $19")
    console.log("Fried Potatos $14")
    console.log("Sandwitches $12")
}

square(2) // 4
printMenu() // undefined, but printed into the console

// Anonymous functions

console.log(function(name) {
    return name
}("Jeff")) // Jeff

const scores = [50, 79, 25, 82, 77, 63]
scores.sort((a, b) => a - b) // [ 25, 50, 63, 77, 79, 82 ]