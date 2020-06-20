// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = []
    let i = 0

    while (i < array.length) {
        chunked.push(array.slice(i, i + size))
        i += size
    }
    return chunked
}

module.exports = chunk;

// function chunk(array, size) {
//     const chunked = []

//     array.forEach(el => {
//         const last = chunked[chunked.length - 1] //get last element (in an array)

//         if(!last || last.length === size) { //check to see if last element is undifined and if size is same as size given
//             chunked.push([el]) //if the last array is finish, push it onto the chunked array
//         } else {
//             last.push(el)
//         }
//     })
//     return chunked
// }