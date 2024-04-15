import {Question} from "../use-cases/question.ts";

export interface QuestionGateway {
    retrieveQuestion(): Promise<Question>;
}
