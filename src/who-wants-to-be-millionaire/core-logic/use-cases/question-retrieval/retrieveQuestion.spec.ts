import {retrieveQuestion} from "./retrieveQuestion.ts";
import {Question} from "./question.ts";
import {MockQuestionGateway} from "../../../adapters/secondary/mockQuestionGateway.ts";
import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {AppState} from "../../../store/appState.ts";

describe('Question retrieval', () => {

    let store: ReduxStore;
    let questionGateway: MockQuestionGateway;
    let initialState: AppState;

    beforeEach(() => {
        questionGateway = new MockQuestionGateway();
        store = initReduxStore({questionGateway});
        initialState = store.getState();
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
            ...initialState,
           questionRetrieval: {
                data: expectedQuestion,
           },
        });
    };

});
