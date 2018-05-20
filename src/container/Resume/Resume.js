import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {reduxForm} from 'redux-form';

import ResumeContactDetails from '../../components/Resume/ResumeContactDetails';
import ResumeSummaryDetails from '../../components/Resume/ResumeSummaryDetails';
import ResumeSkillDetails from '../../components/Resume/ResumeSkillDetails';
import ResumeExperienceDetails from '../../components/Resume/ResumeExperienceDetails';
import ResumeEducationDetails from '../../components/Resume/ResumeEducationDetails';
import ResumeFinal from '../../components/Resume/ResumeFinal';
import ResumeTemplate from '../../components/Resume/ResumeTemplate';

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
        this.setState((prevState, props) => {
            return {
                page: prevState.page - 1
            }
        });
    };

    renderContents = () => {
        switch (this.state.page) {
            case 1:
                return (<ResumeTemplate onSubmit={this.nextPage}/>);
            case 2:
                return (<ResumeContactDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            case 3:
                return (<ResumeSummaryDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            case 4:
                return (<ResumeSkillDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            case 5:
                return (<ResumeExperienceDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            case 6:
                return (<ResumeEducationDetails onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            case 7:
                return (<ResumeFinal onSubmit={this.nextPage} prevPage={this.previousPage}/>);
            default:
                return null;
        }
    };

    render() {
        return (
            <Container className="mt-3">
                {this.renderContents()}
            </Container>
        );
    }
}

export default reduxForm({
    form: 'resume'
})(Resume);