import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends  React.Component {
    render() {
        return (
            <div className="rightNavBar">
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="#home">פורטל עובדים</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">יציאה</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}