import * as actionTypes from '../actions/actionType';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    signup:false
};

const registerStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const registerSuccess = (state, action) => {
    //console.log(state)
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
     } );
};

const registerFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const registerLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setregisterRedirectPath = (state, action) => {
    return updateObject(state, { registerRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.REGISTER_LOGOUT: return registerLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setregisterRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;