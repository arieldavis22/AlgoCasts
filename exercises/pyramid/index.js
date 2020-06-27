// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if(row === n) {
        return;
    }

    if(level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2 * n - 1) / 2)
    let add

    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }

    pyramid(n, row, level + add)

}

module.exports = pyramid;


// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2) //find midpoint of each level (wont change)
//     for(let row = 0; row < n; row++) { //iterate through max amount of rows
//         let level = '' //create var for each level of pyramid

//         for(let col = 0; col < n * 2 - 1; col++) { //loop through max amount of colums (max amount of rows times 2 minus 1)
//             if(midpoint - row <= col && midpoint + row >= col) { //as long as the midpoint +/- the row is greater/less than the colum put a hash
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }