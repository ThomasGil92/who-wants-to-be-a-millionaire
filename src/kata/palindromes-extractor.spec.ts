import {extractPalindromes} from "./palindromesExtractor.ts";

describe('Palindromes extractor', () => {

    describe('One-word sentence', () => {

        it('extract all palindromes', () => {
            expect(extractPalindromes('')).toEqual([]);
            expect(extractPalindromes('A')).toEqual([]);
            expect(extractPalindromes('AA')).toEqual(['AA']);
            expect(extractPalindromes('AB')).toEqual([]);
            expect(extractPalindromes('AAC')).toEqual([]);
            expect(extractPalindromes('ABCA')).toEqual([]);
        });

    });

    describe('Multi-words sentence', () => {

        it('extract all palindromes', () => {
            expect(extractPalindromes('A A')).toEqual([]);
            expect(extractPalindromes('A AA')).toEqual(['AA']);
        });

    });
});
