import {QuestionGateway} from "../../core-logic/gateways/questionGateway.ts";
import {AnswerLetter, Question, ValidatedAnswer} from "../../core-logic/use-cases/question-retrieval/question.ts";

export class StubQuestionGateway implements QuestionGateway {
    question: Question | undefined = undefined;
    isValidatedAnswer = false;

    async retrieveQuestion(): Promise<Question> {
        return this.question!;
    }

    async validate(questionId: string, answerLetter: AnswerLetter): Promise<ValidatedAnswer> {
        return this.isValidatedAnswer;
    }

}

