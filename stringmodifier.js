// 34. A string modifier
function stringModifier(str, position, replacementChar) {
    // Ensure position is within valid range
    if (position < 0 || position >= str.length) {
      return "Invalid position. Please provide a position within the string's length.";
    }
  
    // Slice the string into two parts: before and after the specified position
    const firstPart = str.slice(0, position);
    const secondPart = str.slice(position + 1);
  
    // Concatenate the parts with the replacement character in the middle
    return firstPart + replacementChar + secondPart;
  }
  
  const originalString = "This is my day";
  const modifiedString = stringModifier(originalString, 10, " beautiful ");
  console.log(modifiedString);