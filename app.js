var type = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo']
var stringArr = []
var numArr = []
var nullArr = []
var undefArr = []

type.forEach(function (i) {
    if (typeof i === "string") {
        stringArr.push(i)
    }
    else if (typeof i === "number") {
        numArr.push(i)
    }
    else if (typeof i === "object") {
        nullArr.push(i)
    }
    else if (typeof i === "undefined") {
        undefArr.push(i)
    } 
});

console.log(stringArr);
console.log(numArr );
console.log(nullArr);
console.log(undefArr);
//
var mainArr = [stringArr, numArr, nullArr, undefArr]

mainArr.sort(function (a, b){
    var newA = a.length
    var newB = b.length
    return newB - newA
})
console.log(mainArr);