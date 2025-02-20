let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(times) {
    myPoints += (3 * times)
}

function remove1Point(times) {
    myPoints -= (1 * times)
}


// Call the functions to that the line below logs out 10
add3Points(2)
remove1Point(2)
add3Points(1)

console.log(myPoints)