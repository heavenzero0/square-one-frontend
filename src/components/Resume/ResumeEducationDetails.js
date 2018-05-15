import React from 'react';
import {Button} from 'reactstrap';

const resumeEducationDetails = (props) => {
    return (
        <div>
            education
            <Button onClick={props.prevPage}>prevpage</Button>
            <Button onClick={props.onSubmit}>nextpage</Button>
        </div>
    );
};
export default resumeEducationDetails;