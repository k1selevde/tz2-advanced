import {
    HIDE_ALERT,
    LOG_IN_END_REQUEST,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT
} from "../actions/actionTypes";

let initialState = {
    user: {
        isAuth: false,
        id: null
    },
    errorMsg: '',
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {...state, isLoading: true}
        case LOG_IN_SUCCESS:
            return {...state,
                errorMsg: null,
                user: {id: action.payload.id, isAuth: !!action.payload.id},
                isLoading: false
            }
        case LOG_IN_FAILURE:
            return {...state,
                isAuth: false,
                errorMsg: action.payload.errorMsg,
                isLoading: false
            }
        case LOG_OUT:
            return {...state, user: {...state.user, isAuth: false}, errorMsg: null}
        case HIDE_ALERT:
            return {...state, errorMsg: null}
        default: return state
    }
}