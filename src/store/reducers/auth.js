import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    token: null,
    error: null,
    errorRegister: null,
    email: null,
    id: null,
    loading: false
};

const authStart = (state, action) => {
    return updateObject( state, {error: null, loading: true});
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        email: action.email,
        id: action.id,
        error: null,
        errorRegister: null,
        loading: false
    })
};

const authFail = (state , action) => {
    return updateObject(state, {
        error: action.error,
        errorRegister: action.errorRegister,
        loading: false
    });
};


const authLogout = (state, action) => {
    return updateObject(state, {token: null, email:null, id:null});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state,action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;