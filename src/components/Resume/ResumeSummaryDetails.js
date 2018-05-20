import React from 'react';
import {Button, Card, Row, Form, CardBody, CardTitle} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import './Resume.css';

import Input from '../UI/Input/Input';



const resumeSummaryDetails = (props) => {


    return (
        <div>
            <Card>
                <CardBody className="Resume-Header">
                    <CardTitle>Summary</CardTitle>
                </CardBody>
                <Form className="Resume-Form">
                    <Field type="textarea" name="summary" component={Input} label="Description about yourself"/>
                </Form>
                <Row className="justify-content-between">
                    <Button onClick={props.prevPage} className="col-sm-2 Resume-Button">prev page</Button>
                    <Button onClick={props.onSubmit} className="col-sm-2 Resume-Button">next page</Button>
                </Row>
            </Card>
        </div>
    );
};
export default reduxForm({
    form: 'resume',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true,
})(resumeSummaryDetails);