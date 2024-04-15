import {Question, ValidatedAnswer} from "../use-cases/question-retrieval/question.ts";

export interface QuestionGateway {
    retrieveQuestion(): Promise<Question>;

    validate(): Promise<ValidatedAnswer>;
}

