import {QuestionGateway} from "../../core-logic/gateways/questionGateway.ts";
import {Question} from "../../core-logic/use-cases/question-retrieval/question.ts";

export class StubQuestionGateway implements QuestionGateway {

    question: Question | undefined = undefined;

    async retrieveQuestion(): Promise<Question> {
        return this.question!;
    }
}
