import {AppDispatch, AppRootStateType} from 'app/store';
import {handleServerNetworkError} from 'common/utils/handle-server-network-error';
import {BaseThunkAPI} from '@reduxjs/toolkit/dist/createAsyncThunk';
import {appActions} from 'app/app.reducer';
import {BaseResponseType} from "../types/common.types";


/**
 * Executes a logic function inside a thunk, handling server/network errors and dispatching appropriate actions.
 *
 * @template T - The type of the logic function's return value.
 * @param {BaseThunkAPI<AppRootStateType, unknown, AppDispatch, null | BaseResponseType>} thunkAPI - The BaseThunkAPI object.
 * @param {() => Promise<T>} logic - The logic function that returns a promise.
 * @returns {Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>>} - A promise that resolves to the result of the logic function or rejects with a value specified by thunkAPI.rejectWithValue.
 */
export const thunkTryCatch = async <T>(
    thunkAPI: BaseThunkAPI<AppRootStateType, unknown, AppDispatch, null | BaseResponseType>,
    logic: () => Promise<T>
): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
    const {dispatch, rejectWithValue} = thunkAPI;
    dispatch(appActions.setAppStatus({status: "loading"}));
    try {
        return await logic();
    } catch (e) {
        handleServerNetworkError(e, dispatch);
        return rejectWithValue(null);
    } finally {
        dispatch(appActions.setAppStatus({status: "idle"}));
    }
};