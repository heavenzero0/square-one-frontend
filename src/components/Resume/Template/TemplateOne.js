import React from 'react';

import '../Resume.css';

const templateOne = (props) => {
    return (
        <div className="Resume-Page">
            <div style={{textAlign: 'center'}}>
                <h1 className="Resume-P-M">{props.values.firstName + ' ' + props.values.lastName}</h1>
                <p className="Resume-P-M">{props.values.address}</p>
                <p className="Resume-P-M">{props.values.country + ' ' + props.values.zipCode}</p>
                <p className="Resume-P-M">{props.values.phone}</p>
                <p className="Resume-P-M">{props.values.email}</p>
            </div>
            <div>
                <h2>Summary</h2>
                <hr/>
                <p className="Resume-P-M">{props.values.summary}</p>
            </div>
            <div>
                <h2>Skills</h2>
                <hr/>
                <p className="Resume-P-M">{props.values.skill + ': ' + props.values.level}</p>

            </div>
            <div>
                <h2>Employment History</h2>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-sm-4">
                        <p className="Resume-P-M">{props.values.companyName}</p>
                        <p className="Resume-P-M">{props.values.jobTitle}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="Resume-P-M">{props.values.location}</p>
                        <p className="Resume-P-M">{props.values.fromMonth + ' ' + props.values.fromYear + ' - ' + props.values.toMonth + ' ' + props.values.toYear}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Education</h2>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-sm-4">
                        <p className="Resume-P-M">{props.values.degree + ' Diploma'}</p>
                        <p className="Resume-P-M">{props.values.school + ' - ' + props.values.educationLocation}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="Resume-P-M">Graduated {props.values.gradYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default templateOne;