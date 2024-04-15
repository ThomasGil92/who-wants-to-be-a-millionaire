import {QuestionGateway} from "../../core-logic/gateways/questionGateway.ts";
import {AnswerLetter, Question, ValidatedAnswer} from "../../core-logic/use-cases/question-retrieval/question.ts";

export class MockQuestionGateway implements QuestionGateway {
    question: Question | undefined = undefined;
    private _isValidatedAnswer: Record<string, boolean> = {};

    async retrieveQuestion(): Promise<Question> {
        return this.question!;
    }

    async validate(questionId: string, answerLetter: AnswerLetter): Promise<ValidatedAnswer> {
        return this._isValidatedAnswer[questionId + '_' + answerLetter];
    }

    setValidatedAnswer(questionId: string, answerLetter: AnswerLetter, validated: boolean) {
        this._isValidatedAnswer[questionId + '_' + answerLetter] = validated;
    }
}

