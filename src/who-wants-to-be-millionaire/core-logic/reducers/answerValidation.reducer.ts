import {createReducer} from "@reduxjs/toolkit";
import {lockValidationAction, validateAnswer} from "../use-cases/answer/validateAnswer.ts";
import {AppState} from "../../store/appState.ts";
import {retrieveQuestion} from "../use-cases/question-retrieval/retrieveQuestion.ts";

const initialState: AppState['validatedAnswer'] = { valid: null, validating: 'idle', validationLocked: false };

export const validatedAnswer = createReducer(initialState, (builder) => {
    builder.addCase(validateAnswer.fulfilled, (_, action) => {
        return {
            valid: action.payload,
            validating: 'fulfilled',
            validationLocked: true
        };
    }).addCase(lockValidationAction, (state) => {
        return {
            ...state,
            validating: 'pending',
            validationLocked: true
        };
    })
        .addCase(retrieveQuestion.fulfilled, (_) => {
            return {
                valid: null,
                validating: 'idle',
                validationLocked: false
            };
        });
});
