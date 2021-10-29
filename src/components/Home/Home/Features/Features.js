import React from 'react';
import { Card, Container, Form, FormControl, ListGroup, Nav, Navbar } from 'react-bootstrap';
import style from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCalendarDay, faComment, faHome, faImages, faUsers, faVideo, } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGratipay, faGripfire, } from '@fortawesome/free-brands-svg-icons';
import alisa from '../../../../img/alisa.png';
import postOne from '../../../../img/postOne.jpg';

export default function Features() {
    return (
        <section className={style.FeaturesBG}>
            <div className="container mb-3" variant="white">
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup className="text-start" style={{ borderRadius: '1rem' }}>
                            <ListGroup.Item> <FontAwesomeIcon id={style.home} className={style.icons} icon={faHome} /><span className={style.home}>Home</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.video} className={style.icons} icon={faVideo} /> <span className={style.live}>Live</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.matches} className={style.icons} icon={faGratipay} /> <span className={style.match}>Matches</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.hot} className={style.icons} icon={faGripfire} /> <span className={style.hot}>Hot or Not</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.chat} className={style.icons} icon={faComment} /> <span className={style.chatroom}>Chatrooms</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.events} className={style.icons} icon={faCalendarDay} /> <span className={style.event}>Events</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.groups} className={style.icons} icon={faUsers} /> <span className={style.group}>Groups</span></ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.blogs} className={style.icons} icon={faBlogger} /> <span className={style.blog}>Blogs</span></ListGroup.Item>
                        </ListGroup>
                        <ListGroup className="mt-2" style={{ borderRadius: '1rem'}}>
                            <ListGroup.Item> Subscriptions</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faVideo} /> Live</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faGratipay} /> Matches</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faGripfire} /> Hot or Not</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faComment} /> Chatroms</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faCalendarDay} /> Events</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faUsers} /> Groups</ListGroup.Item>
                            <ListGroup.Item> <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faBlogger} /> Blogs</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-7 mt-2">
                        <Navbar id={style.navBg} expand="lg">
                            <Container>
                                <Navbar.Brand href="#" style={{ marginRight: '-6rem' }}>
                                    <img src={alisa} className={style.logo} alt="" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >

                                    </Nav>
                                    <Form className="mx-5 w-100 h-50 d-flex justify-content-center" id={style.searchForm}>
                                        <FormControl
                                            type="search"
                                            placeholder="Write something here"
                                            className="me-5 rounded-pill"
                                            aria-label="Search"
                                            id={style.form}

                                        />
                                    </Form>
                                    <div className="d-flex justify-content-center align-items-center" id={style.icons}>
                                        <FontAwesomeIcon id={style.upVideo} className={style.icons} icon={faVideo} />
                                        <FontAwesomeIcon id={style.gallery} className={style.icons} icon={faImages} />
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        {/* post */}
                        <Card className="mt-2">
                            <div className="container d-flex justify-content-between align-items-center mt-2">
                                <div className="">
                                    <img src={alisa} className={style.userPhoto} alt="" />
                                    <span className={style.userName}>Alisa jenn</span>
                                    <span className={style.sponsored}>Sponsored</span>
                                </div>
                                <div className="edit">
                                    <FontAwesomeIcon id={style.edit} className={style.icons} icon={faAlignJustify} />
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text className={style.caption}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Img variant="top" src={postOne} />

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-2 mt-5 pt-1">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </section>
    )
}
