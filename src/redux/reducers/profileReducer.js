import {PROFILE_GET_FAILURE, PROFILE_GET_REQUEST, PROFILE_GET_SUCCESS} from "../actions/actionTypes";

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
            return {...state, errorMsg: action.payload.errorMsg}
        case PROFILE_GET_SUCCESS:
            return {...state, user: {...action.payload}}
        default: return state
    }
}

