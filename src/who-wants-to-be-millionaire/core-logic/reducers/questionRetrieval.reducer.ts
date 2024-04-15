import {AppState} from "../../store/appState.ts";
import {createReducer} from "@reduxjs/toolkit";
import {questionRetrievedAction} from "../use-cases/retrieveQuestion.ts";

const initialState: AppState["questionRetrieval"] = {data: null};

export const questionRetrievalReducer =
    createReducer(initialState, (builder) => {
        builder.addCase(questionRetrievedAction, (_, action) => {
            return {
                data: action.payload,
            };
        })
    });
