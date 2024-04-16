import {initReduxStore, ReduxStore} from "../../store/reduxStore.ts";
import {selectPyramid} from "./pyramid.selectors.ts";

describe('Pyramid selectors', () => {
    let store: ReduxStore;

    beforeEach(() => {
        store = initReduxStore({}, [0, 10, 20]);
    });

    describe('Get pyramid', () => {
        it('should return the pyramid with correct order of steps', () => {
            expect(selectPyramid(store.getState())).toEqual({
                currentStep: 0,
                steps: [20, 10, 0]
            });

            const {pyramid} = store.getState();
            expect(pyramid.steps).toEqual([0, 10, 20]);
        });
    });
});
