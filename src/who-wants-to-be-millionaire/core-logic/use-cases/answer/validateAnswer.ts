import {createAsyncThunk} from "@reduxjs/toolkit";
import {ValidatedAnswer} from "../question-retrieval/question.ts";
import {Gateways} from "../../../store/reduxStore.ts";

export const validateAnswer = createAsyncThunk<ValidatedAnswer, void, { extra: Gateways }>(
    'answerValidation',
    async (_, {extra: {questionGateway}}) => {
        return questionGateway.validate();
    }
);