// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array, size){
    let arraySum = 0;
    let average = 0;
    for(let number of array){
        arraySum += number;
        average = arraySum/size;
    }
    return average;
}

const array = [1, 2, 3, 4, 5, 6,]
const arraySize = array.length
const average = make_avg(array, arraySize)
console.log(parseInt(average))