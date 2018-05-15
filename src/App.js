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

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignIn();
    }


    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/resume" component={Resume}/>
                    <Route exact path="/" component={Landing}/>
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