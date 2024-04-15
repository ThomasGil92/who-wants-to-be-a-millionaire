import {AppState} from "../../store/appState.ts";
import {createReducer} from "@reduxjs/toolkit";
import {retrieveQuestion} from "../use-cases/question-retrieval/retrieveQuestion.ts";

const initialState: AppState["questionRetrieval"] = {data: null};

export const questionRetrievalReducer =
    createReducer(initialState, (builder) => {
        builder.addCase(retrieveQuestion.fulfilled, (_, action) => {
            return {
                data: action.payload,
            };
        })
    });
