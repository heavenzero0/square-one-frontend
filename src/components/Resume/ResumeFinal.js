import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

import './Resume.css';
import TemplateOne from './Template/TemplateOne';
import TemplateTwo from './Template/TemplateTwo';

class resumeFinal extends Component {

    renderPage = () => {

        switch (this.props.template) {
            case 1:
                return (
                    <TemplateOne values={this.props.formValues}/>
                );
            case 2:
                return (
                    <TemplateTwo values={this.props.formValues}/>
                );
            default:
                return null;
        }

    };


    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        formValues: state.form.resume.values,
        template: state.resume.template
    }
};

export default connect(mapStateToProps)(resumeFinal);