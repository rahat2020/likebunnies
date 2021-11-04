import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/TopNav.css';
import chat from '../img/chat.svg';
import group from '../img/group.svg';
import menu from '../img/menu.svg';
import rahat from '../img/rahat.png';
import logo from '../img/logo.svg';
import { Search } from '@material-ui/icons';

export default function TopnavCompo() {
    return (

        <Navbar id="navBg" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} className="likebunnie" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="mx-5 w-80 d-flex justify-content-center align-items-center" id="searchForm">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-5 rounded-pill"
                            aria-label="Search"
                            id="form"
                        />
                        <Search id="searchIcon" />
                    </Form>
                    <div className="icons">
                        <div className="navIcon">
                            <div className="iconOne">
                                <img className="navbarChat" src={chat} alt="" />
                            </div>

                            <div className="iconTwo">
                                <img className="navbarGrp" src={group} alt="" />
                            </div>

                            <div className="iconThree">
                                <img className="navbarMenu" src={menu} alt="" />
                            </div>
                        </div>

                        <div className="profileImg">
                            <img src={rahat} id="profile"  alt="" />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

