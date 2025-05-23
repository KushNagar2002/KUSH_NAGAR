// Q: Check for Palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("racecar"));
