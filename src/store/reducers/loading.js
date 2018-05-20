import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";


const initialState = {
    loading: null
};

const loadingStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const loadingFinish = (state, action) => {
    return updateObject(state, {loading: null});
};




const reducer = (state = initialState, actions) => {
    switch (actions) {
        case actionTypes.LOADING: return loadingStart(state, actions);
        case actionTypes.UNLOADING: return loadingFinish(state, actions);
        default: return state;
    }
};

export default reducer