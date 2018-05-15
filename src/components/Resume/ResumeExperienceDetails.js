import React from 'react';
import {Button} from 'reactstrap';

const resumeExperienceDetails = (props) => {
    return (
        <div>
            experience
            <Button onClick={props.prevPage}>prevpage</Button>
            <Button onClick={props.onSubmit}>nextpage</Button>
        </div>
    );
};
export default resumeExperienceDetails;