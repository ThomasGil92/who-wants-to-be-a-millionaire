import {createReducer} from "@reduxjs/toolkit";
import {validateAnswer} from "../use-cases/answer/validateAnswer.ts";

export const validatedAnswer = createReducer({valid: false}, (builder) => {
    builder.addCase(validateAnswer.fulfilled, (_, action) => {
        return {
            valid: action.payload,
        };
    })
});
