let myDate = new Date()

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 9, 15)

console.log(myCreatedDate.toDateString());
myCreatedDate = new Date("10-15-2023")

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getDay());

console.log(myCreatedDate.getMonth());