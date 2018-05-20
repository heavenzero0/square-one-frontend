import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import {withRouter} from 'react-router-dom';

import './Resume.css';
import TemplateOne from './Template/TemplateOne';
import TemplateTwo from './Template/TemplateTwo';
import Input from '../UI/Input/Input';
import {submitResume} from "../../store/actions";
import Spinner from '../UI/Spinner/Spinner';
import Auxx from '../../hoc/Auxx/Auxx';

class ResumeFinal extends Component {

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
        console.log(this.props.loading);
        let showContent = (
            <div>
                {this.renderPage()}
                <Form className="row mb-3" onSubmit={this.props.handleSubmit(values => {
                    values['template'] = +this.props.template;
                    this.props.submitData(values, this.props.history)
                })}>
                    <div className="row justify-content-around w-100">
                        <div className='col-sm-5 '>
                            <Field type="text" name="name" label="File Name" component={Input}/>
                        </div>
                        <Button color="success" className="col-sm-3">SAVE</Button>
                    </div>
                </Form>
            </div>
        );

        if(this.props.loading) {
            showContent = <Spinner style={{margin: "auto"}}/>;
        }
        return (
            <Auxx>
                {showContent}
            </Auxx>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        formValues: state.form.resume.values,
        template: state.resume.template,
        loading: state.resume.loading
    }
};

ResumeFinal = connect(
    mapStateToProps, {submitData: (values, history)=> submitResume(values, history)}
)(withRouter(ResumeFinal));

export default reduxForm({
    form: 'resume',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(ResumeFinal);