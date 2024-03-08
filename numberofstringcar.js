// 19. Counting number of characters that make up a string
function countCharactersWithoutSpaces(string) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        count++;
      }
    }
  
    return count;
  }
  
  const string1 = "Once up on a time";
  const string2 = "I love my mom so much ";
  
  console.log(countCharactersWithoutSpaces(string1)); 
  console.log(countCharactersWithoutSpaces(string2)); 
  
  