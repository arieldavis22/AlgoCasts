// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const compareA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     const compareB = stringB.replace(/[^\w]/g, '').toLowerCase()
//     const objA = buildCharMap(compareA)
//     const objB = buildCharMap(compareB)

//     if(compareA.length === compareB.length) {
        
//         for(let val in objA) {
//             if(objA[val] !== objB[val]) {
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

// function buildCharMap(str) {
//     const charObj = {}
//     str.split('').forEach(char => {
//         if(!charObj[char]) {
//             charObj[char] = 1
//         } else{
//             charObj[char]++
//         }
//     })
//     return charObj
// }

