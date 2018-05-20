import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, email, id) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        email: email,
        id: id,
    }
};

export const authFail = (error, registerErr) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
        errorRegister: registerErr
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirateDate');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
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
            password: password,
            returnSecureToken: true
        };

        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBjL7Feawb88gcvqRpFkeThSxMkyHLePQ4', authData)
            .then(res => {

                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('expirateDate', expirationDate);
                localStorage.setItem('id', res.data.localId);
                dispatch(authSuccess( res.data.idToken, res.data.email, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response,null));
            });
    }
};


export const register = (values) => {



    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: values.email,
            password: values.password,
            returnSecureToken: true,
        };

        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjL7Feawb88gcvqRpFkeThSxMkyHLePQ4', authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('expirateDate', expirationDate);
                localStorage.setItem('id', res.data.localId);
                dispatch(authSuccess( res.data.idToken, res.data.email, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                console.log(err.response);
                dispatch(authFail(null,err.response));
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
                const id = localStorage.getItem('id');
                dispatch(authSuccess(token, email, id));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};