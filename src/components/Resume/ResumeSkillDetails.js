import React from 'react';
import {Button, Card, Row, Form, CardBody, CardTitle, FormGroup, Label} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import './Resume.css';

import Inputs from '../UI/Input/Input';

const resumeSkillDetails = (props) => {
    return (
        <div>
            <Card>
                <CardBody className="Resume-Header">
                    <CardTitle>Professional Skill</CardTitle>
                </CardBody>
                <Form className="Resume-Form">
                    <div className="row">
                        <div className="col">
                            <Field type="text" name="skill" label="Skills" component={Inputs}/>
                        </div>
                        <div className="col">
                            <FormGroup>
                                <Label for="exampleSelectMulti">Level</Label>
                                <Field component="select" name="level" id="exampleSelectMulti" className="form-control">
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                    <option>Expert</option>
                                </Field>
                            </FormGroup>
                        </div>
                    </div>

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
})(resumeSkillDetails);