import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {StubQuestionGateway} from "../../../adapters/secondary/stubQuestionGateway.ts";
import {validateAnswer} from "./validateAnswer.ts";

describe('Answer attempt', () => {
    let store: ReduxStore;
    let questionGateway: StubQuestionGateway;

    beforeEach(() => {
        questionGateway = new StubQuestionGateway();
        store = initReduxStore({questionGateway});
    });

    it('should not have an answer before the game starts', () => {
        const state = store.getState().validatedAnswer
        expect(state.valid).toEqual(false);
    });

    it('should fire winning action when answer is correct', async () => {
        questionGateway.isValidatedAnswer = true;
        await store.dispatch(validateAnswer())

        const state = store.getState().validatedAnswer
        expect(state.valid).toEqual(true);
    })
})

