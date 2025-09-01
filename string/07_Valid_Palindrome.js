var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  const regexForAlphaNumeric = /[a-zA-Z0-9]/;

  const isAlphaNumeric = (char) => regexForAlphaNumeric.test(char);

  while (start < end) {
    while (start < end && !isAlphaNumeric(s[start])) start++;
    while (start < end && !isAlphaNumeric(s[end])) end--;

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return true;
};