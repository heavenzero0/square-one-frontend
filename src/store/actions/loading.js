import * as actionTypes from "./actionTypes";


export const loadingStart = () => async dispatch => {
    dispatch({type: actionTypes.LOADING});
};

export const loadingFinish = () => async dispatch => {
    dispatch({type: actionTypes.UNLOADING});
};