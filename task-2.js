// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkOddEven(number){
    if(number % 2 === 0){
        const result = number/2;
        return result;
    }
    else{
        const result = number*2;
        return result;
    }
}
const oddResult = checkOddEven(5)
console.log(oddResult)
const evenResult = checkOddEven(4)
console.log(evenResult)