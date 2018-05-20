import React, {Component} from 'react';
import { Card, CardBody} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import './Resume.css';

class resumeTemplate extends Component {





    render () {
        return (
            <div>
                <div className="row justify-content-around">
                    <Card className="col-sm-3" onClick={() => {
                        this.props.setTemplate(1);
                        this.props.onSubmit();
                    }}>
                        <CardBody >
                            Template 1
                        </CardBody>
                    </Card>
                    <Card className="col-sm-3" onClick={() => {
                        this.props.setTemplate(2);
                        this.props.onSubmit();
                    }}>
                        <CardBody >
                            Template 2
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTemplate: (template) => dispatch(actions.selectTemplate(template))
    }
};



export default connect(null,mapDispatchToProps)(resumeTemplate);