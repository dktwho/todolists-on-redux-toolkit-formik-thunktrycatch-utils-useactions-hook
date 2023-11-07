import {AppDispatch, AppRootStateType} from "app/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {BaseResponseType} from "../types/common.types";


/**
 * Creates an asynchronous thunk using the createAsyncThunk function.
 *
 * @type {() => ActionCreatorWithPreparedPayload<[string, { state: AppRootStateType; dispatch: AppDispatch; rejectValue: BaseResponseType | null; }, any], { requestId: string, requestStatus: string, arg: { state: AppRootStateType; dispatch: AppDispatch; rejectValue: BaseResponseType | null; }, aborted: boolean, condition: boolean }>}
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootStateType;
    dispatch: AppDispatch;
    rejectValue: BaseResponseType | null;
}>();
