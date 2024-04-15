import {initReduxStore, ReduxStore} from "../../../store/reduxStore.ts";
import {AppState} from "../../../store/appState.ts";

describe('Pyramid update', () => {

    let store: ReduxStore;
    let initialState: AppState;

    beforeEach(() => {
        store = initReduxStore();
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

});
