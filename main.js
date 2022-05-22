// function returnRandom() {
//     var randum = Math.random()
//     return randum
// } console.log(returnRandom())



// function returnRandonNumber(num) {
//     var num = Math.random()
//     return num
// } console.log(returnRandonNumber())



// function printNumberMassege() {
//     var number = +prompt("INTER NUMBER");
//     var num1 = Math.floor(Math.random() * 10);
//     if (number == num1) {
//         document.write("yess")
//     }
//     else {
//         document.write("Noooo")
//     }
// } console.log(printNumberMassege())


// function popRandomArray() {
//     var RnnArray = [];
//     for (var i = 0; i < 10; i++) {
//         RnnArray.push(Math.floor(Math.random() * 100));
//     }
//     console.log(RnnArray);
// }


// function maxNumber() {
//     var num = +prompt()
//     var mum = Math.max(Math.random() * 10, num)
//     return Math.max(num,mum)
// } document.write(maxNumber())


function printMinNumber() {
    var ARRAY = [];
    for (var i = 0; i < 5; i++) {
        var fiveNumber = +prompt("five number")
        ARRAY += fiveNumber
    }
    console.log(Math.min(...ARRAY))
} printMinNumber()