import React ,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, Form} from 'reactstrap';
import {connect} from 'react-redux';
import _ from 'lodash';

import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import '../Login/Login.css';

const Fields = [
    {label: 'Name', name: 'name', type: 'text'},
    {label: 'Email', name: 'email', type: 'text'},
    {label: 'Password', name: 'password', type: 'password'},
    {label: 'Confirm Password', name: 'password_confirmation', type: 'password'}
];



class Register extends Component {
    state = {
        fields: Fields
    };

    renderInputs = () => {
        return (
            this.state.fields.map(field => (
                <Field key={field.name} type={field.type} name={field.name} label={field.label} component={Input} />
            ))
        );
    };


    render() {
        return (
            <Form className="Login-Form" onSubmit={this.props.handleSubmit(values => this.props.onAuth(values))}>
                {this.renderInputs()}
                <Button color="dark">REGISTER</Button>
            </Form>
        );
    }
}


function validate(values) {
    const errors = {};

    _.each(Fields, ({name}) => {
        if(!values[name]) {
            errors[name] = 'You must provide an ' + name;
        }
    });


    return errors;
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (values) => dispatch(actions.register(values))
    }
};

Register = connect(
    null,
    mapDispatchToProps
)(Register);

export default reduxForm({
    validate: validate,
    form: 'registerForm'
})(Register);