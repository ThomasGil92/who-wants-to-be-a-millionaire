import {createReducer} from "@reduxjs/toolkit";
import {validateAnswer} from "../use-cases/answer/validateAnswer.ts";

const initialState = (steps: number[]) => ({
    currentStep: 0,
    steps
});

export const pyramid = (steps: number[]) => createReducer(initialState(steps), (builder) => {
    builder.addCase(validateAnswer.fulfilled, (state) => {
        const nextIndex = steps.indexOf(state.currentStep) + 1;
        return {
            ...state,
            currentStep: steps[nextIndex],
        };
    });
});
