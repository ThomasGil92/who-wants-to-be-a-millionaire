import {createReducer} from "@reduxjs/toolkit";
import {validateAnswer} from "../use-cases/answer/validateAnswer.ts";

const initialState = {
    currentStep: 0,
    steps: [0, 10, 20]
};

export const pyramid = createReducer(initialState, (builder) => {
    builder.addCase(validateAnswer.fulfilled, (state) => {
        return {
            ...state,
            currentStep: 10
        };
    });
});
