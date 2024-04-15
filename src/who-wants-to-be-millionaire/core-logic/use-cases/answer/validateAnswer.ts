import {AnswerLetter, ValidatedAnswer} from "../question-retrieval/question.ts";
import {createAppAsyncThunk} from "../createAppAsyncThunk.ts";

export const validateAnswer = createAppAsyncThunk<ValidatedAnswer, AnswerLetter>(
    'answerValidation',
    async (answerLetter, {getState, extra: {questionGateway}}) => {
        return questionGateway.validate(getState().questionRetrieval.data!.id, answerLetter);
    }
);
