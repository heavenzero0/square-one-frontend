import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink as Link} from 'react-router-dom';

import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

class Header extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState((prevState, props) => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    };

    renderContents = () =>{

        switch(this.props.isAuthenticated) {
            case true:
                return (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/dashboard">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/logout">Logout</NavLink>
                        </NavItem>
                    </Nav>
                );
            default:
                return (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">Register</NavLink>
                        </NavItem>
                    </Nav>
                );
        }
    };

    render() {




        return (
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand tag={Link} to="/">SquareOne</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    {this.renderContents()}
                </Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps =(state) => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
};
export default connect(mapStateToProps)(Header);