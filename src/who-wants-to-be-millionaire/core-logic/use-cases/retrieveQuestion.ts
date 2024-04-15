import {Question} from "./question.ts";
import {AppThunk} from "../../store/reduxStore.ts";
import {createAction} from "@reduxjs/toolkit";
import {QuestionGateway} from "../gateways/questionGateway.ts";

export const questionRetrievedAction = createAction<Question>("QUESTION_RETRIEVED");

export const retrieveQuestion = (): AppThunk<Promise<void>> => async (
    dispatch,
    _,
    {questionGateway}: {questionGateway: QuestionGateway}
)=>   {
    const question = await questionGateway.retrieveQuestion();
        dispatch(questionRetrievedAction(question));
    };
