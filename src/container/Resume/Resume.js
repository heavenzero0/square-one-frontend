import React, {Component} from 'react';
import {Container} from 'reactstrap';

import ResumeContactDetails from '../../components/Resume/ResumeContactDetails';
import ResumeSummaryDetails from '../../components/Resume/ResumeSummaryDetails';
import ResumeSkillDetails from '../../components/Resume/ResumeSkillDetails';
import ResumeExperienceDetails from '../../components/Resume/ResumeExperienceDetails';
import ResumeEducationDetails from '../../components/Resume/ResumeEducationDetails';

class Resume extends Component {

    state = {
        page: 1
    };

    nextPage = () => {
        this.setState((prevState, props) => {
            return {
                page: prevState.page + 1
            }
        });
    };

    previousPage = () => {
        this.setState((prevState, props)=>{
           return {
               page: prevState.page - 1
           }
        });
    };

    render() {

        let renderForm = null;

        if(this.state.page === 1) {
            renderForm = (<ResumeContactDetails onSubmit={this.nextPage}/>);
        }
        if(this.state.page === 2) {
            renderForm = (<ResumeSummaryDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
        }
        if(this.state.page === 3) {
            renderForm = (<ResumeSkillDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
        }
        if(this.state.page === 4) {
            renderForm = (<ResumeExperienceDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
        }
        if(this.state.page === 5) {
            renderForm = (<ResumeEducationDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
        }

        return (
            <Container>
                {renderForm}
            </Container>
        );
    }
}

export default Resume;