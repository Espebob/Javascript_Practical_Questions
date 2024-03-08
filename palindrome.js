// 28. Checks if a string is a palindrome
function isPalindrome(str) {
    // Remove non-word characters(like space or punctuation marks) and convert to lowercase
    const cleanStr = str.replace(/\W/g, "").toLowerCase();
  
    // Check if the reversed string is equal to the original string
    return cleanStr === cleanStr.split("").reverse().join("");
  }
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 