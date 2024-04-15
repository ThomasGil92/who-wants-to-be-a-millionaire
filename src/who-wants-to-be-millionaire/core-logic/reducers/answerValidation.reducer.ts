import {createReducer} from "@reduxjs/toolkit";
import {validateAnswer} from "../use-cases/answer/validateAnswer.ts";
import {AppState} from "../../store/appState.ts";

const initialState: AppState['validatedAnswer'] = null;

export const validatedAnswer = createReducer(initialState, (builder) => {
    builder.addCase(validateAnswer.fulfilled, (_, action) => {
        return {
            valid: action.payload,
        };
    })
});
