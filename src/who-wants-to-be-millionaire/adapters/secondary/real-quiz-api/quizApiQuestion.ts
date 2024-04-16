export interface QuizApiQuestion {
    id: number;
    question: string;
    answers: Record<string, string | null>;
    multiple_correct_answers: string;
    correct_answers: Record<string, string>;
}
