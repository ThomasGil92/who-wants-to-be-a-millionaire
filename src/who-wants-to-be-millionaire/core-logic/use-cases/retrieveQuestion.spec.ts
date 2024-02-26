import {QuestionGateway, retrieveQuestion} from "./retrieveQuestion.ts";
import {Question} from "./question.ts";
import axios from "axios";
import {vi} from 'vitest';

class StubQuestionGateway implements QuestionGateway {

    question: Question | undefined = undefined;

    async retrieveQuestion(): Promise<Question> {
        return this.question!;
    }
}

describe('Question retrieval', () => {

    let _retrieveQuestion: ReturnType<typeof retrieveQuestion>;
    let questionGateway: StubQuestionGateway;

    beforeEach(() => {
        questionGateway = new StubQuestionGateway();
        _retrieveQuestion = retrieveQuestion(questionGateway);
    });

    it('should retrieve a question', async () => {
        const currentQuestion = {
            id: '1',
            label: 'What is the capital of France?',
        };
        questionGateway.question = currentQuestion;
        expect(await _retrieveQuestion()).toEqual<Question>(currentQuestion);
    });

});
