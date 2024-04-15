export const extractPalindromes = (sentence: string): string[] => {
    return sentence.split(' ')
        .filter(word => determineIfPalindrome(word));
}


export const determineIfPalindrome = (word: string): boolean => {
    if (word.length === 0)
        return false;
    return word.split('').every((letter, index) => letter === word[word.length - index - 1]);
}
