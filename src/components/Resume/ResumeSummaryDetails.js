import React from 'react';
import {Button, Card, Row, Form} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
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

const resumeSummaryDetails = (props) => {

    const renderInputs = () => {
        return (
            Fields.map(field => (
                <Field key={field.name} type={field.type} name={field.name} label={field.label} grid={field.grid} component={Input}/>
            ))
        );
    };

    return (
        <div>
            <Card>
                <Form className="Resume-Form">
                    {renderInputs()}
                </Form>
                <Row className="justify-content-between">
                    <Button onClick={props.prevPage} className="col-sm-2 Resume-Button">prevpage</Button>
                    <Button onClick={props.onSubmit} className="col-sm-2 Resume-Button">nextpage</Button>
                </Row>
            </Card>
        </div>
    );
};
export default reduxForm({
    form: 'resume'
})(resumeSummaryDetails);