// Given an array and chunk size, divide that array into many sub arrays
// where each subarray is of length size
// chunk ([1,2,4], 2) => [[1,2,], [3,4]]
// chunk ([1,2,3,4,5],2) [[1,2],[3,4],[5]]

function chunk(array, size) {
    
    // create empty 'chunked' array
    const chunked = []
    // create 'index' start at 0
    let index = 0
    // while index is less than array.length
    while(index < array.length) {
        // push a slice of length 'size' from 'array' into chunked
        chunked.push(array.slice(index, index + size))
        // add 'size' to 'index' 
        index += size
    }
}

module.exports = chunk

let result = chunk([1,2,3,4,5,6,7,8,], 2)

console.log(result)