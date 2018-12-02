import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

var FontAwesome = require('react-fontawesome');




// This is the navigation bar which can hightlight the section
// where the user is currently in
export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    // This method will speficiy the style of a section
    // if the user are currently in one section,
    // it will be highlighted by blue background color
    // and white texts and icon.
    getBackground(page) {
        if (page !== this.props.current) {
            return ({
                color: "lightgray",
                disabled: "",
                inverse: true,
                backgroundColor: "none"
            });
        } else {
            return ({
                disabled: " disable-link",
                inverse: false,
                backgroundColor: "none",
                textDecoration: "underline",
                color: "lightgray"
            });
        }
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        let introStyle = this.getBackground("/");
        let dataStyle = this.getBackground("data");
        let statStyle = this.getBackground("stat");
        let mlStyle = this.getBackground("ml")
        let validationStyle = this.getBackground("validation");
        let conclusionStyle = this.getBackground("conclusion");
        return (
            <Navbar style={{backgroundColor: "gray", 
                            padding: "0px",
                            height: "4rem",
                            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.16), 0 10px 10px rgba(0, 0, 0, 0.23)",}} light expand="md">
                <NavbarBrand style={{
                    color: "white"
                }}>{this.props.name}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} style={{
                    backgroundColor: 'white'
                }}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar style={{
                        flex: 1
                    }} >
                        <NavItem style={{
                            backgroundColor: introStyle.backgroundColor
                        }} >
                            <div className={"icon-text-container " + introStyle.disabled}>
                                <Link to="/" style={{ textDecoration: 'none', color: introStyle.color }} >
                                    Introduction
                                </Link>
                            </div>
                        </NavItem>
                        
                        
                        <NavItem style={{
                            backgroundColor: dataStyle.backgroundColor
                        }}>
                            <div className={"icon-text-container " + dataStyle.disabled}>
                                <Link to="/data" style={{ textDecoration: 'none', color: dataStyle.color }}>Data Wrangling and Visulization</Link>
                            </div>
                        </NavItem>

                        <NavItem style={{
                            backgroundColor: statStyle.backgroundColor
                        }}>
                            <div className={"icon-text-container " + statStyle.disabled}>
                                <Link to="/stat" style={{ textDecoration: 'none', color: statStyle.color }}>Statistical Analysis</Link>
                            </div>
                        </NavItem>

                        <NavItem style={{
                            backgroundColor: mlStyle.backgroundColor
                        }}>
                            <div className={"icon-text-container " + mlStyle.disabled}>
                                <Link to="/ml" style={{ textDecoration: 'none', color: mlStyle.color }}>Machine Learning</Link>
                            </div>
                        </NavItem>

                        <NavItem style={{
                            backgroundColor: validationStyle.backgroundColor
                        }}>
                            <div className={"icon-text-container " + validationStyle.disabled}>
                                <Link to="/validation" style={{ textDecoration: 'none', color: validationStyle.color }}>Validation</Link>
                            </div>
                        </NavItem>

                        <NavItem style={{
                            backgroundColor: conclusionStyle.backgroundColor
                        }}>
                            <div className={"icon-text-container " + conclusionStyle.disabled}>
                                <Link to="/conclusion" style={{ textDecoration: 'none', color: conclusionStyle.color }}>Conclusions and Implications</Link>
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}