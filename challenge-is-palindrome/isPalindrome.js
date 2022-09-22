
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// For example:

// isPalindrom("a")
// returns true

// isPalindrom("noon")
// returns true

// isPalindrom("hello")
// returns false


// Write your code below
function palindrome(string) {
    return true;
}
console.log(palindrome("stats"));


// Now use logic
function isPalindrome(string) {
    let newWord = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newWord = newWord + string[i];
    }
    return newWord === string;
}
console.log(isPalindrome("stats"));