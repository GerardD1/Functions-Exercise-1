function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
    return side * side;
}

function getAreaOfTriangle(base, height) {
    return (base * height) / 2;
}

let circleArea = getAreaOfCircle(7);
console.log(`The area of a circle with a 7in radius is ${circleArea}.`);

let cirleCircumference = getCircumferenceOfCircle(6);
console.log(`The circumference of a circle with a 6in radius is ${cirleCircumference}.`);

let squareArea = getAreaOfSquare(10);
console.log(`The area of a square with 10in sides is ${squareArea}.`);

let triangleArea = getAreaOfTriangle(11, 14);
console.log(`The area of a triangle with an 11in base and 14in height is ${triangleArea}.`);