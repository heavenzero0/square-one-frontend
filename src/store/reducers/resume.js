import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    name: null,
    template: null,
    firstName: null,
    lastName: null,
    address: null,
    country: null,
    zipCode: null,
    phone: null,
    email: null,
    summary: null,
    skill: null,
    level: null,
    companyName: null,
    jobTitle: null,
    location: null,
    fromMonth: 'January',
    fromYear: '2000',
    toMonth: 'January',
    toYear: '2000',
    degree: null,
    school: null,
    educationLocation: null,
    gradYear: null
};

const resumeTemplate = (state, action) => {
    return updateObject(state, {
        template: action.template
    });
};

const resumeData = (state, values) => {
    console.log(values);
    return updateObject(state, {
        name: values.name,
        template: +values.template,
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        country: values.country,
        zipCode: values.zipCode,
        phone: values.phone,
        email: values.email,
        summary: values.summary,
        skill: values.skill,
        level: values.level,
        companyName: values.companyName,
        jobTitle: values.jobTitle,
        location: values.location,
        fromMonth: values.fromMonth,
        fromYear: values.fromYear,
        toMonth: values.toMonth,
        toYear: values.toYear,
        degree: values.degree,
        school: values.school,
        educationLocation: values.educationLocation,
        gradYear: values.gradYear
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RESUME_TEMPLATE: return resumeTemplate(state, action);
        case actionTypes.RESUME_LOAD: return action.payload;
        case actionTypes.RESUME_DATA: return resumeData(state, action.payload);
        default:
            return state;
    }
};

export default reducer;