export interface Question {
    id: string;
    label: string;
    answers: Answers;
}

export type AnswerLabel = string;
export type AnswerLetter = 'A' | 'B' | 'C' | 'D';
export type Answers = Record<AnswerLetter, AnswerLabel>;

export type ValidatedAnswer = boolean;