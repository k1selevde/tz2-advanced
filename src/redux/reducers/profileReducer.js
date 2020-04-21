import {PROFILE_CLEAR, PROFILE_GET_FAILURE, PROFILE_GET_REQUEST, PROFILE_GET_SUCCESS} from "../actions/actionTypes";

const initialState = {
    user: null,
    isFetching: false,
    errorMsg: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET_REQUEST:
            return {...state, isFetching: true}
        case PROFILE_GET_FAILURE:
            return {...state,  isFetching: false, errorMsg: action.payload.errorMsg}
        case PROFILE_GET_SUCCESS:
            return {...state,  isFetching: false, user: {...action.payload}}
        case PROFILE_CLEAR:
            return {...state, user: null}
        default: return state
    }
}

