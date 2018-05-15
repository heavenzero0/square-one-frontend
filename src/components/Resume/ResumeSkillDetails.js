import React from 'react';
import {Button} from 'reactstrap';

const resumeSkillDetails = (props) => {
    return (
        <div>
            skilles
            <Button onClick={props.prevPage}>prevpage</Button>
            <Button onClick={props.onSubmit}>nextpage</Button>
        </div>
    );
};
export default resumeSkillDetails;