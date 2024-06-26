import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {AppState} from "../../../store/appState.ts";
import {validateAnswer} from "../answer/validateAnswer.ts";

describe('Pyramid update', () => {

    let store: ReduxStore;
    let initialState: AppState;

    beforeEach(() => {
        store = initReduxStore({}, [0, 10, 20]);
        initialState = store.getState();
    });

    describe('Before any answer validation', () => {

        it('pyramid should have been reset', () => {
            expect(store.getState()).toEqual({
                ...initialState,
                pyramid: {
                    currentStep: 0,
                    steps: [0, 10, 20]
                }
            });
        });

    });

    describe('After a correct answer validation', () => {

        it('pyramid should increase by one step each time', () => {
            store.dispatch(validateAnswer.fulfilled(true, '123abc', 'A', 'requestId'));
            initialState = store.getState();
            expect(store.getState()).toEqual({
                ...initialState,
                pyramid: {
                    currentStep: 10,
                    steps: [0, 10, 20]
                }
            });
        });

    });

    describe('After two correct answer validations', () => {

        it('pyramid should have increased by one two steps', () => {
            store.dispatch(validateAnswer.fulfilled(true, '123abc', 'A', 'requestId'));
            store.dispatch(validateAnswer.fulfilled(true, '123abc', 'A', 'requestId'));
            initialState = store.getState();
            expect(store.getState()).toEqual({
                ...initialState,
                pyramid: {
                    currentStep: 20,
                    steps: [0, 10, 20]
                }
            });
        });
    });


});
