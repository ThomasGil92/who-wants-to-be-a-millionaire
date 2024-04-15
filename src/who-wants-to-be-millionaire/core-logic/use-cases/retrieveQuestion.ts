import {Question} from "./question.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Gateways} from "../../store/reduxStore.ts";

/*export const retrieveQuestion = async (dispatch: ReduxStore['dispatch'], questionGateway: QuestionGateway) =>   {
    const question = await questionGateway.retrieveQuestion();
        dispatch(questionRetrievedAction(question));
    };*/

export const retrieveQuestion = createAsyncThunk<Question, void, {extra: Gateways}>(
    'questionRetrieval',
    async (_, {extra: {questionGateway}}) => {
        return questionGateway.retrieveQuestion();
    }
);
