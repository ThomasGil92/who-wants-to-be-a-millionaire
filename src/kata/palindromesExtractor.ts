

export const extractPalindromes = (sentence: string) => {
    const words = sentence.split(' ');
    return words.filter(isWordAPalindrome);
}

const isWordAPalindrome = (word: string) => {
    if (word.length <= 1)
        return false;
    for (let i = 0; i < word.length / 2; i++)
        if (areSymmetricLettersIdentical(word, i))
            return false;
    return true;
}

const areSymmetricLettersIdentical = (sentence: string, letterPosition: number)  => {
    return sentence.charAt(letterPosition) !== sentence.charAt(sentence.length - letterPosition - 1);
}
