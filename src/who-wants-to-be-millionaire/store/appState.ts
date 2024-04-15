import {Question} from "../core-logic/use-cases/question-retrieval/question.ts";

export interface AppState {
    questionRetrieval: {
        data: QuestionState | null;
    };
    validatedAnswer: {
        valid: boolean | null;
    };
}

export type QuestionState = Question;
