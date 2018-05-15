import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        email: email
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirateDate');
    localStorage.removeItem('email');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout)
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        };

        axios.post('http://squareone.test/api/login', authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.data.token.expires_in * 1000);
                localStorage.setItem('token', res.data.data.token.access_token);
                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('expirateDate', expirationDate);
                dispatch(authSuccess( res.data.data.token.access_token, res.data.data.email));
                dispatch(checkAuthTimeout(res.data.data.token.expires_in));
            })
            .catch(err => {
                dispatch(authFail(err.response));
            });
    }
};


export const register = (values) => {
    return dispatch => {
        dispatch(authStart());

        console.log(values);

        axios.post('http://squareone.test/api/register', values)
            .then(res => {
                dispatch(authSuccess(res.data));
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirateDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const email = localStorage.getItem('email');
                dispatch(authSuccess(token, email));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};