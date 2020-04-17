import {PROFILE_GET_FAILURE, PROFILE_GET_REQUEST, PROFILE_GET_SUCCESS} from "./actionTypes";
import {checkResponse, httpGet} from "../../helpers/network";

export function getProfile(id) {
    return dispatch => {
        dispatch(getRequest())
        httpGet(`user-info/${id}`)
            .then(res =>
                checkResponse(res)
                ? dispatch(getSuccess(res.data))
                : dispatch(getFailure(res.message))
            )
            .catch(() =>
                dispatch(getFailure('Сервер недоступен'))
            )


    }
}

export function getRequest() {
        return {
            type: PROFILE_GET_REQUEST
        }
}
export function getSuccess(data) {
    return {
        type: PROFILE_GET_SUCCESS,
        payload: {...data}
    }
}
export function getFailure(msg) {
    return {
        type: PROFILE_GET_FAILURE,
        payload: {errorMsg: msg}
    }
}




