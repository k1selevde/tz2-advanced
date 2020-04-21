import {NEWS_CLEAR, NEWS_GET_FAILURE, NEWS_GET_REQUEST, NEWS_GET_SUCCESS} from "../actions/actionTypes";

let initialState = {
    data: null,
    errorMsg: '',
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEWS_GET_REQUEST:
            return {...state, isLoading: true}
        case NEWS_GET_SUCCESS:
            return {...state, isLoading: false, data: action.payload.data}
        case NEWS_GET_FAILURE:
            return {...state, isLoading: false, errorMsg: action.payload.message }
        case NEWS_CLEAR:
            return {...state, data: null}
        default: return state;
    }
}