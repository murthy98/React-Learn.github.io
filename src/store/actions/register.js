import axios from 'axios';

import * as actionTypes from './actionType';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = (token, userId) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.REGISTER_LOGOUT
    };
};



export const register = (email, password) => {
    return dispatch => {
        dispatch(registerStart());
        //console.log("dispatch")
        const registerData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDoY-xvMUmUCuS5YbQPtbTPX2LnhQ0vmDM';
       
        axios.post(url, registerData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                //console.log(response.data.idToken);
                dispatch(registerSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                dispatch(registerFail(err.response.data.error));
            });
    };
};
