import {Question} from "./question.ts";

export interface QuestionGateway {
    retrieveQuestion(): Promise<Question>;
}

export const retrieveQuestion = (questionGateway: QuestionGateway) =>
    async (): Promise<Question> => {
        return questionGateway.retrieveQuestion();
    };
