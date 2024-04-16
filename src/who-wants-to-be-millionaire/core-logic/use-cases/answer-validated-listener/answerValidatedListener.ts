import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { AppState } from "../../../store/appState.ts";
import { AppDispatch } from "../../../store/reduxStore.ts";
import { retrieveQuestion } from "../question-retrieval/retrieveQuestion.ts";
import {validateAnswer} from "../answer/validateAnswer.ts";

export const answerValidatedListener = createListenerMiddleware();

const listener = answerValidatedListener.startListening as TypedStartListening<
  AppState,
  AppDispatch
>;

listener({
  actionCreator: validateAnswer.fulfilled,
  effect: async (action, listenerApi) => {
    if (
      action.payload
    ) {
      setTimeout(() => {
        listenerApi.dispatch(retrieveQuestion());
      }, 2000);
    }
  },
});
