import {AnswerLetter, ValidatedAnswer} from "../question-retrieval/question.ts";
import {createAppAsyncThunk} from "../createAppAsyncThunk.ts";

export const validateAnswer = createAppAsyncThunk<ValidatedAnswer, AnswerLetter>(
    'answerValidation',
    async (answerLetter, {getState, extra: {questionGateway}}) => {
        /*if(getState().validatedAnswer.validating === 'pending')
            throw new Error('Cannot validate answer while another validation is in progress');*/
        return questionGateway.validate(getState().questionRetrieval.data!.id, answerLetter);
    }
);
