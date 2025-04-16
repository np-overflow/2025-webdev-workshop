let age = 16;

if (age < 18) {
    console.log("You are not allowed to purchase alcohol.")
}
else if (age < 21) {
    console.log("You may purchase alcohol")
}
else {
    console.log("You can purchase alcohol and can vote")
}

// Part 2
let username = "nullflow"
let robot = true

if (!robot) {
    console.log("You cannot be a robot")
}

if (username === "overflow" || username === "nullsec") {
    console.log("You cannot create an account with the name " + username)
}
else {
    console.log("Account created")
}