// 10. Display pattern of stars
function displayPattern(rows, columns) {
    // Iterate through rows
    for (let i = 0; i < rows; i++) {
        let pattern = '';
        // Iterate through columns
        for (let j = 0; j < columns; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

// Call the function to display the pattern with 4 rows and 5 columns
displayPattern(4, 5);