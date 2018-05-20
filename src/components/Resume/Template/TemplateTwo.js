import React from 'react';

import '../Resume.css';
import './TemplateTwo.css';

const templateTwo = (props) => {
    return (
        <div className="Resume-Page">
            <div className="TemplateTwo-Header-Grey"/>
            <div style={{textAlign: 'center'}} className="row">
                <div className="col">
                    <h1 className="Resume-P-M">{props.values.firstName + ' ' + props.values.lastName}</h1>
                    <p className="Resume-P-M">
                        {
                            props.values.address + ' | ' +
                            props.values.country + ' ' + props.values.zipCode + ' | ' +
                            props.values.phone + ' | ' +
                            props.values.email
                        }
                    </p>

                </div>
            </div>
            <div>
                <h2>Summary</h2>
                <div className="TemplateTwo-Line"/>
                <p className="Resume-P-M TemplateTwo-Left">{props.values.summary}</p>
            </div>
            <div>
                <h2>Skills</h2>
                <div className="TemplateTwo-Line"/>
                <p className="Resume-P-M TemplateTwo-Left">{props.values.skill + ': ' + props.values.level}</p>

            </div>
            <div>
                <h2>Employment History</h2>
                <div className="TemplateTwo-Line"/>
                <div className="row justify-content-between TemplateTwo-Left">
                    <div className="col-sm-4">
                        <p className="Resume-P-M"><strong>{props.values.jobTitle}</strong></p>
                        <p className="Resume-P-M"><strong>{props.values.companyName}</strong></p>
                    </div>
                    <div className="col-sm-8">
                        <p className="Resume-P-M">{props.values.fromMonth + ' ' + props.values.fromYear + ' - ' + props.values.toMonth + ' ' + props.values.toYear}</p>
                        <p className="Resume-P-M">{props.values.location}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Education</h2>
                <div className="TemplateTwo-Line"/>
                <div className="row justify-content-between TemplateTwo-Left">
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
export default templateTwo;