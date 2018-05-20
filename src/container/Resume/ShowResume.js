import React, {Component} from 'react';
import {connect} from 'react-redux'

import TemplateOne from '../../components/Resume/Template/TemplateOne';
import TemplateTwo from '../../components/Resume/Template/TemplateTwo';

class ShowResume extends Component {

    renderPage = () => {
        switch (this.props.resume.template) {
            case 1:
                return (
                    <TemplateOne values={this.props.resume}/>
                );
            case 2:
                return (
                    <TemplateTwo values={this.props.resume}/>
                );
            default:
                return null;
        }
    };


    render() {


        console.log(this.props.resume);

        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }
}

const mapStateTOProps = (state) => {

    return {
        resume: state.resume
    }
};

export default connect(mapStateTOProps)(ShowResume);