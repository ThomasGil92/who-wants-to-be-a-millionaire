import {AppState} from "../../../../store/appState.ts";
import {createSelector} from "@reduxjs/toolkit";

export type PyramidVM = {
    currentStep: number;
    steps: number[];
    numberOfGoodAnswers: number;
}

export const selectPyramid = createSelector(
    (state: AppState) => state.pyramid,
    (pyramid) => ({
        ...pyramid,
        steps: pyramid.steps.slice().reverse()
    })
)
