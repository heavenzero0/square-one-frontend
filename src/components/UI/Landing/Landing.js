import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

class Landing extends Component {




    render() {

        let authRedirect = null;

        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to="/dashboard"/>;
        }
        return (
            <div className="container mt-5">
                <div className="row">
                    <h2>Create a standout resume in minutes</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Link className="btn btn-outline-secondary col-md-6" to="/register">CREATE RESUME</Link>
                    </div>
                </div>
                {authRedirect}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.id
    }
};
export default connect(mapStateToProps)(Landing);