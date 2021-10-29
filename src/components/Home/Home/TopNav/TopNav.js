import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TopNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faSearch } from '@fortawesome/free-solid-svg-icons';
import chat from '../../../../img/chat.svg';
import group from '../../../../img/group.svg';
import menu from '../../../../img/menu.svg';
import rahat from '../../../../img/rahat.png';
import logo from '../../../../img/logo.svg';
export default function TopNav() {
    return (

        <Navbar id={style.navBg} expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} className={style.logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    <Form className="mx-5 w-80 d-flex justify-content-center" id={style.searchForm}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-5 rounded-pill"
                            aria-label="Search"
                            id={style.form}

                        />
                    </Form>
                    <div className={style.icons}>
                        <div className={style.navIcon}>
                            <img className={style.navbaricon} src={chat} alt="" />
                            <img className={style.navbaricon} src={group} alt="" />
                            <img className={style.navbaricon} src={menu} alt="" />
                        </div>

                        <div className={style.profileImg}>
                            <img src={rahat} id={style.profile} alt="" />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
