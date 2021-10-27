import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TopNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    return (

        <Navbar bg="light" expand="lg" className="container">
            <Container fluid>
                <Navbar.Brand href="#">LikeBunnies</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-start" id={style.form}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-5 round"
                                aria-label="Search"
                                
                            />
                        </Form>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
