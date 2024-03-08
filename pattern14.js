// 14. Patterns
function displayPattern() {
    const size = 4; // Size of the pattern

    for (let i = 0; i < size; i++) {
        let pattern = '';

        // Adding spaces
        for (let j = 0; j < size - i - 1; j++) {
            pattern += ' ';
        }

        // Adding '1' at appropriate position
        pattern += '1';

        console.log(pattern);
    }
}

// Call the function to display the pattern
displayPattern();