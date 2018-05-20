import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Dashboard from './components/UI/Dashboard/Dashboard';
import Landing from './components/UI/Landing/Landing';
import Register from './container/Register/Register';
import Login from './container/Login/Login';
import Logout from './container/Login/Logout/Logout';
import Resume from './container/Resume/Resume';
import LoadResume from './container/Resume/LoadResume';
import ShowResume from './container/Resume/ShowResume';
import Error from './container/Error';
import requireAuth from './hoc/AuthenticationHoc';

class App extends Component {

    componentWillMount() {
        this.props.onTryAutoSignIn();
    }


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/dashboard" component={requireAuth(Dashboard)}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/resume" component={requireAuth(Resume)}/>
                    <Route exact path="/users/resumes" component={LoadResume}/>
                    <Route exact path="/users/resumes/view" component={requireAuth(ShowResume)}/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/*" component={Error} />
                </Switch>
            </Layout>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignIn: () => dispatch(action.authCheckState())
    };
};

export default withRouter(connect(null,mapDispatchToProps)(App));