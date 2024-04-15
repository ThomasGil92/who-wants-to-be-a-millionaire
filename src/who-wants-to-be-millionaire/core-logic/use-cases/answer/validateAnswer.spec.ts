import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {MockQuestionGateway} from "../../../adapters/secondary/mockQuestionGateway.ts";
import {validateAnswer} from "./validateAnswer.ts";
import {AppState} from "../../../store/appState.ts";
import {retrieveQuestion} from "../question-retrieval/retrieveQuestion.ts";

describe('Answer validation', () => {
    let store: ReduxStore;
    let questionGateway: MockQuestionGateway;
    let initialState: AppState;

    beforeEach(() => {
        questionGateway = new MockQuestionGateway();
        store = initReduxStore({questionGateway});
        initialState = store.getState();
    });

    it('should not have an answer before the game starts', () => {
        expect(store.getState()).toEqual({
            ...initialState,
            validatedAnswer: {valid: null}
        });
    });

    describe('The game has started', () => {

        beforeEach(() => {
            store.dispatch(retrieveQuestion.fulfilled(currentQuestion, 'requestId'));
            initialState = store.getState();
        });

        it('should validate the answer', async () => {
            questionGateway.setValidatedAnswer('1', 'A', true);

            await store.dispatch(validateAnswer('A'));

            expect(store.getState()).toEqual({
                ...initialState,
                validatedAnswer: {
                    valid: true,
                },
            });
        });

        /*it('should not validate any answer twice', () => {
            store.dispatch(validateAnswer.pending('', 'A'));
            store.dispatch(validateAnswer('A'));
            expect(questionGateway.validationHaveBeenCalled).toBe(false);
        });*/

    });

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
})

