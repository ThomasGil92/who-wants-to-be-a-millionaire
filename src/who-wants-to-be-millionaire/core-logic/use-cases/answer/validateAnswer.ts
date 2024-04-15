import {AnswerLetter, ValidatedAnswer} from "../question-retrieval/question.ts";
import {createAppAsyncThunk} from "../createAppAsyncThunk.ts";
import {createAction} from "@reduxjs/toolkit";

export const lockValidationAction = createAction('LOCK_VALIDATION');

export const validateAnswer = createAppAsyncThunk<ValidatedAnswer, AnswerLetter>(
    'answerValidation',
    async (answerLetter, {dispatch, getState, extra: {questionGateway}}) => {
        if(getState().validatedAnswer.validationLocked)
            throw new Error('Already validating an answer');
        dispatch(lockValidationAction());
        return questionGateway.validate(getState().questionRetrieval.data!.id, answerLetter);
    }
);
