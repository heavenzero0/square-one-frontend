import {RESUME_LOAD, LOADING} from "../actions/actionTypes";
import {updateObject} from "../utility";


const initialState = {
    loading: null,
    resumeList: []
};

const loadingStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const loadingFinish = (state, action) => {
    return updateObject(state, {loading: null, resumeList: action.payload});
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return loadingStart(state, action);
        case RESUME_LOAD:
            return loadingFinish(state, action);
        default:
            return state;
    }
}