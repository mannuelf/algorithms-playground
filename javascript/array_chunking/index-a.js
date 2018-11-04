// Given an array and chunk size, divide that array into many sub arrays
// where each subarray is of length size
// chunk ([1,2,4], 2) => [[1,2,], [3,4]]
// chunk ([1,2,3,4,5],2) [[1,2],[3,4],[5]]

function chunk(array, size) {
    
    // create empty array to hold chunks called 'chunked'
    const chunked = []

    // For each element in the 'un-chunked' array
    for (let element of array) {
        const last = chunked[chunked.length -1]
    }

    // if last element does not exist, or if its length is equal to chunk size
    if (!last || last.length === size) {
        chunked.push([element])
    } else {
        // push a new chunk into 'chunked; with the current element
        last.push(element)
    }

    // else add the current element into the chunk
    return chunked  
}

module.exports = chunk

chunk([1,2,3,4,5,6,7,8,], 2)

console.log()