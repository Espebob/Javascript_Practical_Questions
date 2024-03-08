// 11. Pattern with decreasing number of elements
function displayPattern(size) {
    // Iterate through rows
    for (let i = size; i >= 1; i--) {
        let pattern = '';
        // Iterate through columns
        for (let j = 1; j <= i; j++) {
            pattern += '1 ';
        }
        console.log(pattern);
    }
}

// Calling the function to display the pattern with size 4
displayPattern(4);