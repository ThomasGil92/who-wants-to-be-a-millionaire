// Anna a fait du Kayak hier et un radar l'a flashée
//["Anna", "Kayak", "radar"]

import {extractPalindromes} from "./palindromes.ts";

it('should extract palindromes of a given sentence of one word', () => {
    expectPalindromes('')([]);
    expectPalindromes('a')(['a']);
    expectPalindromes('ab')([]);
    expectPalindromes('abca')([]);
});

it('should extract palindromes of a given sentence of multiple word', () => {
    expectPalindromes('a ')(['a']);
    expectPalindromes('a b')(['a', 'b']);
});

const expectPalindromes = (sentence: string) =>
    (expectedPalindromes: string[]) =>
        expect(extractPalindromes(sentence)).toEqual(expectedPalindromes);
