import {AppState} from "../../store/appState.ts";
import {createReducer} from "@reduxjs/toolkit";
import {retrieveQuestion, validateAnswer} from "../use-cases/question-retrieval/retrieveQuestion.ts";

const initialState: AppState["questionRetrieval"] = {data: null};

export const questionRetrievalReducer =
    createReducer(initialState, (builder) => {
        builder.addCase(retrieveQuestion.fulfilled, (_, action) => {
            return {
                data: action.payload,
            };
        })
    });

export const validatedAnswer = createReducer({valid: false}, (builder) => {
    builder.addCase(validateAnswer.fulfilled, (_, action) => {
        return {
            valid: action.payload,
        };
    })
});
