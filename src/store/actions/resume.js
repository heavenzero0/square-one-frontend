import axios from 'axios';
import * as actionTypes from "./actionTypes";


export const selectTemplate = (template) => {
    return {
        type: actionTypes.RESUME_TEMPLATE,
        template: template
    }
};

export const loadingStart = () => async dispatch => {
    dispatch({type: actionTypes.LOADING});
};

export const setResume = (data) => {
    return dispatch => {
        dispatch({type: actionTypes.RESUME_DATA, payload: data});
    }
};
export const loadResume = () => async (dispatch, getState) => {
    dispatch(loadingStart());
    const {id} = getState().auth;
    const {token} = getState().auth;
    //const res = await axios.get('http://squareone.test/api/users/' + id + '/resumes');
    const res = await axios.get('https://square-5e6b6.firebaseio.com/resumes/' + id + '/resume.json?auth=' + token);
    const fetchedOrders = [];
    for ( let key in res.data ) {
        fetchedOrders.push( {
            ...res.data[key],
            id: key
        } );
    }
    dispatch({type: actionTypes.RESUME_LOAD, payload: fetchedOrders});
};

export const submitResume = (values, history) => async (dispatch, getState) => {
    dispatch(loadingStart());
    const {id} = getState().auth;
    values['user_id'] = id;
    const {token} = getState().auth;
    const resume = {
            address: values.address,
            companyName: values.companyName,
            country: values.country,
            degree: values.degree,
            educationLocation: values.educationLocation,
            email: values.email,
            firstName: values.firstName,
            fromMonth: values.fromMonth,
            fromYear: values.fromYear,
            gradYear: values.gradYear,
            jobTitle: values.jobTitle,
            lastName: values.lastName,
            level: values.level,
            location: values.location,
            name: values.name,
            phone: values.phone,
            school: values.school,
            skill: values.skill,
            summary: values.summary,
            template: +values.template,
            toMonth: values.toMonth,
            toYear: values.toYear,
            zipCode: values.zipCode
    };
    //const res = await axios.post('http://squareone.test/api/users/' + id + '/resumes', values);
    await axios.post('https://square-5e6b6.firebaseio.com/resumes/' + id + '/resume.json?auth=' + token, resume);
    history.push('/users/resumes');
    dispatch({type: actionTypes.UNLOADING});
};
