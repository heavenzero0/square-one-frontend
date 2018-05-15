import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import authReducer from './reducers/auth';

export default combineReducers({
    form: reduxForm,
    auth: authReducer
});