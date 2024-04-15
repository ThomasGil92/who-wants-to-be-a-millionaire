import {AnswerLetter, Question, ValidatedAnswer} from "../use-cases/question-retrieval/question.ts";

export interface QuestionGateway {
    retrieveQuestion(): Promise<Question>;

    validate(questionId: string, answerLetter: AnswerLetter): Promise<ValidatedAnswer>;
}

