import React, {Component} from 'react';

class Error extends Component {

    render () {
        return (
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <h3 >Page is not found,</h3>
                <h3>Incorrect URL</h3>
            </div>
        );
    }
}

export default Error;