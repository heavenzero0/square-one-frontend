import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import {Card, CardTitle} from 'reactstrap'
import {withRouter} from 'react-router-dom';

class LoadResume extends Component {

    componentDidMount() {
        this.props.loadResume();
    }

    handleClick = (data) => {
        this.props.setResume(data);
        this.props.history.push('/users/resumes/view')
    };


    render() {
        let renderResume = null;

        if (this.props.resumes !== null) {
            renderResume = this.props.resumes.map(resume => {
                return (
                        <Card key={resume.id} className="col-sm-5 mt-5" onClick={(e) => {this.handleClick(resume,e)}} >
                            <CardTitle>
                                {resume.name}
                            </CardTitle>
                        </Card>
                );
            });
        }

        return (
            <Container>
                <div className="row justify-content-between">
                    {renderResume}
                </div>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resumes: state.resumeList
    }
};



export default withRouter(connect(mapStateToProps, {loadResume: actions.loadResume, setResume: (data)=> actions.setResume(data)})(LoadResume));