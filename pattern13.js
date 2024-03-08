// 13. Patterns
function displayPattern() {
    const size = 5; // Size of the pattern
    for (let i = 0; i < size; i++) {
        let pattern = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                pattern += '1 ';
            } else {
                pattern += '0 ';
            }
        }
        console.log(pattern);
    }
}

// Call the function to display the pattern
displayPattern();