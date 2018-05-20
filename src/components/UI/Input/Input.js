import React from 'react';

import {Label, FormGroup, Input, Alert} from 'reactstrap';

const input = ({input, label, type, meta: {touched, error}, grid}) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input {...input} placeholder={label} type={type}/>
            <div>
                {touched && error && <Alert color="danger">{error}</Alert>}
            </div>
        </FormGroup>


    );
};

export default input;