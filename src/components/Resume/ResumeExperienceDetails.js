import React from 'react';
import {Button, Card, Row, Form, CardBody, CardTitle, FormGroup, Label} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';

import './Resume.css';
import Inputs from '../UI/Input/Input';

const Months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];


const years = (startYear) => {
    let currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;

    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }

    return years;
};

const resumeExperienceDetails = (props) => {


    const renderMonths = Months.map((month) => <option key={month}>{month}</option>);
    const renderYears = years().map((year) =>  <option key={year}>{year}</option>);



    return (
        <div>
            <Card>
                <CardBody className="Resume-Header">
                    <CardTitle>Experience</CardTitle>
                </CardBody>
                <Form className="Resume-Form">
                    <div className="row">
                        <div className="col">
                            <Field type="text" name="jobTitle" label="Job Title" component={Inputs}/>
                        </div>
                        <div className="col">
                            <Field type="text" name="companyName" label="Company Name" component={Inputs}/>
                        </div>
                    </div>
                    <Field type="text" name="location" label="Location" component={Inputs}/>
                    <FormGroup className="row justify-content-around">
                        <Label className="col-sm-3">From: </Label>
                        <Field className="col-sm-3" component="select" name="fromMonth">
                            {renderMonths}
                        </Field>
                        <Field className="col-sm-3" component="select" name="fromYear">
                            {renderYears}
                        </Field>
                    </FormGroup>
                    <FormGroup className="row justify-content-around">
                        <Label className="col-sm-3">To: </Label>
                        <Field className="col-sm-3" component="select" name="toMonth">
                            {renderMonths}
                        </Field>
                        <Field className="col-sm-3" component="select" name="toYear">
                            {renderYears}
                        </Field>
                    </FormGroup>
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
})(resumeExperienceDetails);