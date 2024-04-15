import {Question} from "./question.ts";
import {createAppAsyncThunk} from "../createAppAsyncThunk.ts";

export const retrieveQuestion = createAppAsyncThunk<Question, void>(
    'questionRetrieval',
    async (_, {extra: {questionGateway}}) => {
        return questionGateway.retrieveQuestion();
    }
);
