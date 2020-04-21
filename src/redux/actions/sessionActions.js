import {checkResponse, postData} from "../../helpers/network";
import * as t from './actionTypes'
import {API_ROOT, defaultErrorMsg} from "../../constants/Default";

export function logIn(data) {
    return dispatch => {
        dispatch(loginRequest())
        postData(`${API_ROOT}/validate`,data)
            .then(res => checkResponse(res)
                ? dispatch(loginSuccess(res.data))
                : dispatch(loginFailure(res.message))
            )
            .catch (error =>
               console.log(defaultErrorMsg)
            )

    }
}
export function logOut() {
    return {
        type: t.LOG_OUT
    }
}
export function loginRequest() {
    return {
        type: t.LOG_IN_REQUEST
    }
}
export function loginSuccess(data) {
    return {
        type: t.LOG_IN_SUCCESS,
        payload: {id: data.id}
    }
}
export function loginFailure(error) {
    return {
        type: t.LOG_IN_FAILURE,
        payload: {errorMsg: error}
    }
}

export function hideAlert() {
    return {
        type: t.HIDE_ALERT
    }
}