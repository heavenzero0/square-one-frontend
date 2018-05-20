import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

const dashboard = (props) => {

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                    <Link className="btn btn-success col-md-6" to="/resume">CREATE RESUME</Link>
            </div>
            <div className="row justify-content-center mt-5">
                <Link className="btn btn-success col-md-6" to="/users/resumes">LOAD RESUME</Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(actions.loadResume())
    }
};

export default connect(null, mapDispatchToProps)(dashboard);