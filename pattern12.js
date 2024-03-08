// 12. Patterns
function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            if (j >= rows - i) {
                row += '0 ';
            } else {
                row += '1 ';
            }
        }
        console.log(row);
    }
}
displayPattern(4, 4);