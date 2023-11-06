import {Dispatch} from "redux";
import {appActions} from "app/app.reducer";
import {BaseResponseType} from "common/types/common.types";


/**
 *
 * @param data  data is of type BaseResponseType<D>, which seems to be a generic type representing the server response data.
 * @param dispatch dispatch is the Dispatch function, probably from a Redux store, used to dispatch actions.
 * @param showError  showError is a boolean parameter that is optional and defaults to true.
 */

export const handleServerAppError = <D>(
    data: BaseResponseType<D>,
    dispatch: Dispatch,
    showError: boolean = true
) => {
    if (showError) {
        dispatch(appActions.setAppError({error: data.messages.length ? data.messages[0] : "Some error occurred"}))
    }
    dispatch(appActions.setAppStatus({status: "failed"}));
};