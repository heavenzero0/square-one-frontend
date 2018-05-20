import React from 'react';
import {Button, Card, Row, Form, CardBody, CardTitle} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import _ from 'lodash';

import './Resume.css';
import Input from '../UI/Input/Input';

const Fields = [
    {label: 'First Name', name: 'firstName', type: 'text', grid: 'col-sm-6'},
    {label: 'Last Name', name: 'lastName', type: 'text', grid: 'col-sm-6'},
    {label: 'Phone', name: 'phone', type: 'text', grid: 'col-sm-6'},
    {label: 'Email', name: 'email', type: 'text', grid: 'col-sm-6'},
    {label: 'Address', name: 'address', type: 'text', grid: 'col-sm-12'},
    {label: 'Zip Code', name: 'zipCode', type: 'text', grid: 'col-sm-6'},
    {label: 'Country', name: 'country', type: 'text', grid: 'col-sm-6'},
];


const resumeContactDetails = (props) => {

    const renderInputs = () => {
        return (
            Fields.map(field => (
                <Field key={field.name} type={field.type} name={field.name} label={field.label} grid={field.grid}
                       component={Input}/>
            ))
        );
    };

    return (
        <div>
            <Card className="mb-4">
                <CardBody className="Resume-Header">
                    <CardTitle>Personal Details</CardTitle>
                </CardBody>
                <Form className="Resume-Form">
                    {renderInputs()}

                </Form>
                <Row className="justify-content-between">
                    <Button onClick={props.prevPage} className="col-sm-2 Resume-Button">prev page</Button>
                    <Button onClick={props.onSubmit} className="col-sm-2 Resume-Button">next page</Button>
                </Row>
            </Card>
        </div>
    );
};

function validate(values) {
    const errors = {};
    _.each(Fields, ({name}) => {
        if (!values[name]) {
            errors[name] = 'You must provide an ' + name;
        }
    });

    return errors;
}


export default reduxForm({
    validate,
    form: 'resume',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true,
})(resumeContactDetails);