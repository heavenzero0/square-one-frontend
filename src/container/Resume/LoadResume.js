import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from "../../store/actions";
import {Card, CardTitle} from 'reactstrap'
import {withRouter, Redirect} from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import './Resume.css';

class LoadResume extends Component {

    componentDidMount() {
        if(this.props.isAuthenticated){
            this.props.loadResume();
        }
    }

    handleClick = (data) => {
        this.props.setResume(data);
        this.props.history.push('/users/resumes/view')
    };


    render() {
        let renderResume = null;
        let authRedirect = null;
        if(!this.props.isAuthenticated){
            authRedirect = <Redirect to="/"/>;
        }


        if (this.props.resumes.length > 0) {
            renderResume = this.props.resumes.map(resume => {
                return (
                        <Card key={resume.id} className="col-sm-5 mt-5" onClick={(e) => {this.handleClick(resume, e)}} >
                            <CardTitle>
                                {resume.name}
                            </CardTitle>
                        </Card>
                );
            });
        }else{
            renderResume = (
                <div className="LoadResume-No-Item">
                    <h3>No Resume Created</h3>
                    <Link className="btn btn-success col-md-6 LoadResume-Link" to="/resume">Create</Link>
                </div>
            );
        }
        if(this.props.loading) {
            renderResume = <Spinner/>;
        }




        return (
            <Container>
                <div className="row justify-content-between">
                    {renderResume}
                    {authRedirect}
                </div>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resumes: state.resumeList.resumeList,
        loading: state.resumeList.loading,
        isAuthenticated: state.auth.id
    }
};



export default withRouter(connect(mapStateToProps, {loadResume: actions.loadResume, setResume: (data)=> actions.setResume(data)})(LoadResume));