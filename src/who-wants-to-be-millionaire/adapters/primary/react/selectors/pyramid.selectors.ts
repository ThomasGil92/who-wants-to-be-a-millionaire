import {AppState} from "../../../../store/appState.ts";
import {createSelector} from "@reduxjs/toolkit";

export const selectPyramid = createSelector(
    (state: AppState) => state.pyramid,
    (pyramid) => ({
        currentStep: pyramid.currentStep,
        steps: pyramid.steps.slice().reverse()
    })
)
