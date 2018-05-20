import React from 'react';
import {Button, Card, Row, Form, CardBody, CardTitle} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import './Resume.css';

import Input from '../UI/Input/Input';

const resumeEducationDetails = (props) => {
    return (
        <div>
            <Card>
                <CardBody className="Resume-Header">
                    <CardTitle>Education</CardTitle>
                </CardBody>
                <Form className="Resume-Form">
                    <div className="row">
                        <div className="col">
                            <Field type="text" label="Degree" name="degree" component={Input}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Field type="text" label="Grad Year" name="gradYear" component={Input}/>
                        </div>
                        <div className="col">
                            <Field type="text" label="Location" name="educationLocation" component={Input}/>
                        </div>
                    </div>
                    <Field type="text" label="School" name="school" component={Input}/>
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
})(resumeEducationDetails);