import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import authReducer from './reducers/auth';
import resumeReducer from './reducers/resume';
import resumeListReducer from './reducers/resumeList';

export default combineReducers({
    form: reduxForm,
    auth: authReducer,
    resume: resumeReducer,
    resumeList: resumeListReducer
});