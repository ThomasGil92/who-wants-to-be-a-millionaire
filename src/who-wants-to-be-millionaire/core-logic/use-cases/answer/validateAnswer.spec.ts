import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {StubQuestionGateway} from "../../../adapters/secondary/stubQuestionGateway.ts";
import {validateAnswer} from "./validateAnswer.ts";
import {AppState} from "../../../store/appState.ts";
import {retrieveQuestion} from "../question-retrieval/retrieveQuestion.ts";

describe('Answer validation', () => {
    let store: ReduxStore;
    let questionGateway: StubQuestionGateway;
    let initialState: AppState;

    beforeEach(() => {
        questionGateway = new StubQuestionGateway();
        store = initReduxStore({questionGateway});
        store.dispatch(retrieveQuestion.fulfilled(currentQuestion, 'requestId'));
        initialState = store.getState();
    });

    it('should not have an answer before the game starts', () => {
        const state = store.getState().validatedAnswer
        expect(state.valid).toEqual(false);
    });

    it('should fire winning action when answer is correct', async () => {
        questionGateway.isValidatedAnswer = true;
        await store.dispatch(validateAnswer('A'))

        expect(store.getState()).toEqual({
            ...initialState,
            validatedAnswer: {
                valid: true,
            },
        });
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

