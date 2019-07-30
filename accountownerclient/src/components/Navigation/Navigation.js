import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
 
const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar variant="dark">
                
                    <Navbar.Brand>
                        <NavLink to={'/'} exact >Account-Owner</NavLink>
                    </Navbar.Brand>
                    
                
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/owner-list'} exact>
                            <Nav.Item eventkey={1}>
                                Owner Actions
                            </Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={'/account-list'}>
                            <Nav.Item eventkey={2}>
                                Account Actions
                            </Nav.Item>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </Col>
    )
}
 
export default navigation;