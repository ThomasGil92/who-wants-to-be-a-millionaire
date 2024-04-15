import {retrieveQuestion} from "./retrieveQuestion.ts";
import {Question} from "./question.ts";
import {StubQuestionGateway} from "../../adapters/secondary/stubQuestionGateway.ts";
import {initReduxStore, ReduxStore} from "../../store/reduxStore.ts";

describe('Question retrieval', () => {

    let store: ReduxStore;
    let questionGateway: StubQuestionGateway;

    beforeEach(() => {
        questionGateway = new StubQuestionGateway();
        store = initReduxStore({questionGateway});
    });

    it("should not have retrieved any question before the game starts", () => {
        expectRetrievedQuestion(null);
    });

    it('should retrieve a question as soon as the game starts', async () => {
        const currentQuestion = {
            id: '1',
            label: 'What is the capital of France?',
            answers: {
                A: 'Paris',
                B: 'London',
                C: 'Berlin',
                D: 'Madrid',
            }
        };
        questionGateway.question = currentQuestion;
        await store.dispatch(retrieveQuestion());
        expectRetrievedQuestion(currentQuestion);
    });

    const expectRetrievedQuestion = (
        expectedQuestion: Question | null,
    ) => {
        expect(store.getState()).toEqual({
            questionRetrieval: {
                data: expectedQuestion,
            },
        });
    };

});
