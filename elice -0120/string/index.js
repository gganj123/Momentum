
function isPalindrome(str) {
    let reverse = str
      .toLowerCase()
      .split('')
      .filter(c => c >= 'a' && c <= 'z')
      .reverse()
      .join('');
  
    if (str === reverse) {
      return true;
    }
  
    return false;
  }
  console.log(isPalindrome('A man, a plan, a canal. Panama'));

  
  function isIsogram(str) {
    for (x = 0; x < str.length; x++) {
      for (y = str.length; y > x; y--) {
        if (str[x] == str[y]) {
          return false;
        }
      }
    }
    return true;
  }
  
  module.exports = { isPalindrome, isIsogram };
  