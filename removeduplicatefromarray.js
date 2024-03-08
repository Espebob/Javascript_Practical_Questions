// 38. Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)]; 
  }console.log(removeDuplicates(["a", "b", "c", "a", "b"]));