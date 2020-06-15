// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = '';
    let num = 0;


    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }

    // Object.keys(obj).forEach((key) => {
    //     if(obj[key] > num) {
    //         num = obj[key]
    //         max = key
    //     }
    // })
    for (let char in obj) {
        if(obj[char] > num) {
            num = obj[char]
            max = char
        }
    }

    return max
}

module.exports = maxChar;
