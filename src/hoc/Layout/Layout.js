import React, {Component} from 'react';

import Auxx from '../Auxx/Auxx';
import Header from '../../components/UI/Header/Header';

class Layout extends Component {

    render() {
        return (
            <Auxx>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </Auxx>
        );
    }
}

export default Layout;