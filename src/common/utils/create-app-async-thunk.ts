import {AppDispatch, AppRootStateType} from "app/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {BaseResponseType} from "../types/common.types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootStateType;
    dispatch: AppDispatch;
    rejectValue: BaseResponseType | null;
}>();
