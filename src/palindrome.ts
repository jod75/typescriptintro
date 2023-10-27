function isPalindrome(input: string): boolean {
    const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = sanitized.split('').reverse().join('');
    return sanitized === reversed;
}

let word = "racecar";
console.log(`Is '${word}' a palindrome? ${isPalindrome(word)}`);
word = "racingcar";
console.log(`Is '${word}' a palindrome? ${isPalindrome(word)}`);