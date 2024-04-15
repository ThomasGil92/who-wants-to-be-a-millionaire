import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppState} from "../../store/appState.ts";
import {AppDispatch, Gateways} from "../../store/reduxStore.ts";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppState
    dispatch: AppDispatch
    rejectValue: string
    extra: Gateways
}>()
