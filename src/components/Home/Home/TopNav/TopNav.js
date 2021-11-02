import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TopNav.module.css';
import chat from '../../../../img/chat.svg';
import group from '../../../../img/group.svg';
import menu from '../../../../img/menu.svg';
import rahat from '../../../../img/rahat.png';
import logo from '../../../../img/logo.svg';
import { Search } from '@material-ui/icons';

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
                    <Form className="mx-5 w-80 d-flex justify-content-center align-items-center" id={style.searchForm}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-5 rounded-pill"
                            aria-label="Search"
                            id={style.form}
                        />
                        <Search id={style.searchIcon} />
                    </Form>
                    <div className={style.icons}>
                        <div className={style.navIcon}>
                            <div className={style.iconOne}>
                                <img className={style.navbarChat} src={chat} alt="" />
                            </div>

                            <div className={style.iconTwo}>
                                <img className={style.navbarGrp} src={group} alt="" />
                            </div>

                            <div className={style.iconThree}>
                                <img className={style.navbarMenu} src={menu} alt="" />
                            </div>
                        </div>

                        <div className={style.profileImg}>
                            <img src={rahat} id={style.profile}  alt="" />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

