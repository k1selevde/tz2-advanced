import * as t from './actionTypes';
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
        type: t.NEWS_GET_REQUEST
    }
}

export function getNewsSuccess(data) {
    return {
        type: t.NEWS_GET_SUCCESS,
        payload: {data: data}
    }
}

export function getNewsFailure(msg) {
    return {
        type: t.NEWS_GET_FAILURE,
        payload: {message: msg}
    }
}

export function newsClear() {
    return {
        type: t.NEWS_CLEAR
    }
}
