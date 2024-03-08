// 36. Counts number of consonants
function countConsonants(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz"; 
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (consonants.includes(char) && char.match(/[a-z]/)) {
       // Only count letters (not spaces or punctuation)
      count++;
    }
  }

  return count;
}console.log(countConsonants('Few steps but everyday'));