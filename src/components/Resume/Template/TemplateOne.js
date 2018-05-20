import React from 'react';

import '../Resume.css';
import './TemplateOne';

const templateOne = (props) => {


    return (
        <div id="divToPrint" className="Resume-Page">
            <div style={{textAlign: 'center'}}>
                <h1 className="Resume-P-M">{props.values.firstName + ' ' + props.values.lastName}</h1>
                <p className="Resume-P-M">{props.values.address}</p>
                <p className="Resume-P-M">{props.values.country + ' ' + props.values.zipCode}</p>
                <p className="Resume-P-M">{props.values.phone}</p>
                <p className="Resume-P-M">{props.values.email}</p>
            </div>
            <div className="mt-3">
                <div className="TemplateOne-Header-Grey"><h2>Summary</h2></div>
                <p className="Resume-P-M ml-3">{props.values.summary}</p>
            </div>
            <div className="mt-3">
                <div className="TemplateOne-Header-Grey"><h2>Skills</h2></div>
                <p className="Resume-P-M ml-3">{props.values.skill + ': ' + props.values.level}</p>
            </div>
            <div className="mt-3">
                <div className="TemplateOne-Header-Grey"><h2>Employment History</h2></div>
                <div className="row justify-content-between ml-1">
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
            <div className="mt-3">
                <div className="TemplateOne-Header-Grey"><h2>Education</h2></div>
                <div className="row justify-content-between ml-1">
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