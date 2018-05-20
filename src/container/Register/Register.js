import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, Form, Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';

import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import '../Login/Login.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const Fields = [
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
                <Field key={field.name} type={field.type} name={field.name} label={field.label} component={Input}/>
            ))
        );
    };


    render() {

        let form = (
            <div>
                {this.renderInputs()}
                <Button color="dark">REGISTER</Button>
            </div>

        );

        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (<Alert color="danger">{this.props.error.data.error.message}</Alert>);
        }

        let authRedirect = null;

        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/dashboard"/>
        }

        return (
            <Form className="Login-Form" onSubmit={this.props.handleSubmit(values => this.props.onAuth(values))}>
                {authRedirect}
                {form}
                {errorMessage}

            </Form>
        );
    }
}


function validate(values) {
    const errors = {};
    if (values.password !== values.password_confirmation) {
        errors.password_confirmation = 'Password unmatch';
    }

    _.each(Fields, ({name}) => {
        if (!values[name]) {
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

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.errorRegister,
        isAuthenticated: state.auth.token !== null
    }
};

Register = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);

export default reduxForm({
    validate: validate,
    form: 'registerForm'
})(Register);