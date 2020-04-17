import {NEWS_GET_FAILURE, NEWS_GET_REQUEST, NEWS_GET_SUCCESS} from "./actionTypes";
import {API_ROOT} from "../../constants/Default";
import {checkResponse, httpGet} from "../../helpers/network";


// thunk-creator:

export function getNews() {
    return dispatch => {
        dispatch(getNewsRequest())
        httpGet(`news`)
            .then(res =>
                checkResponse(res)
                ? dispatch(getNewsSuccess(res.data))
                : dispatch(getNewsFailure(res.message))
            )
            .catch(() =>
                dispatch(getNewsFailure('Сервер недоступен'))
            )
    }
}

export function getNewsRequest() {
    return {
        type: NEWS_GET_REQUEST
    }
}

export function getNewsSuccess(data) {
    return {
        type: NEWS_GET_SUCCESS,
        payload: {data: data}
    }
}

export function getNewsFailure(msg) {
    return {
        type: NEWS_GET_FAILURE,
        payload: {message: msg}
    }
}

