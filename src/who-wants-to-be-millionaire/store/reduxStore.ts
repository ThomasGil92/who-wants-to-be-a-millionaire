import {Action, configureStore, Store, ThunkAction, ThunkDispatch,} from "@reduxjs/toolkit";
import {AppState} from "./appState";
import {QuestionGateway} from "../core-logic/gateways/questionGateway.ts";
import {questionRetrievalReducer as questionRetrieval} from "../core-logic/reducers/questionRetrieval.reducer.ts";
import {validatedAnswer} from "../core-logic/reducers/answerValidation.reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {pyramid} from "../core-logic/reducers/pyramid.reducer.ts";

export type Gateways = {
    questionGateway: QuestionGateway;
};

export const initReduxStore = (gateways?: Partial<Gateways>,
                               pyramidSteps: number[] = []) => {
    return configureStore({
        reducer: {
            questionRetrieval,
            validatedAnswer,
            pyramid: pyramid(pyramidSteps)
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: gateways,
                },
                serializableCheck: false,
            }),
        devTools: true,
    });
};

export type ReduxStore = Store<AppState> & {
    dispatch: ThunkDispatch<AppState, Gateways, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    Gateways,
    Action
>;

export type AppDispatch = ThunkDispatch<AppState, Gateways, Action>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppState>()
