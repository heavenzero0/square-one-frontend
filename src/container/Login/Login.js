import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, Form, Alert} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Login.css';


const Fields = [
    {label: 'Email', name: 'email', type: 'text'},
    {label: 'Password', name: 'password', type: 'password'}
];

class Login extends Component {

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
                <Button color="dark">LOGIN</Button>
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

            <Form className="Login-Form"
                  onSubmit={this.props.handleSubmit(values => this.props.onAuth(values.email, values.password))}>
                {authRedirect}
                {form}
                {errorMessage}

            </Form>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(Fields, ({name}) => {
        if (!values[name]) {
            errors[name] = 'You must provide an ' + name;
        }
    });


    return errors;
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
};

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default reduxForm({
    validate: validate,
    form: 'loginForm'
})(Login);