import React, { useEffect } from 'react';
import { Card, Container, Form, FormControl, ListGroup, Nav, Navbar } from 'react-bootstrap';
import style from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCalendarDay, faChevronDown, faComment, faHome, faImages, faUsers, faVideo, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGratipay, faGripfire, } from '@fortawesome/free-brands-svg-icons';
import alisa from '../../../../img/alisa.png';
import postOne from '../../../../img/postOne.jpg';
import groupOne from '../../../../img/groupOne.jpg';
import groupTwo from '../../../../img/groupTwo.jpg';
import groupThree from '../../../../img/groupThree.jpg';
import groupFour from '../../../../img/groupFour.jpg';
import groupFive from '../../../../img/groupFive.jpg';
import rahat from '../../../../img/rahat.png';
import shoe from '../../../../img/shoe.jpg';
import postTwo from '../../../../img/postTwo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';

export default function Features() {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <section className={style.FeaturesBG}>
            <div className="container mb-3 w-100" variant="white">
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup className="text-start" style={{ borderRadius: '1rem' }} data-aos="fade-up">
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.home} className={style.icons} icon={faHome} /><span className={style.home}>Home</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.video} className={style.icons} icon={faVideo} /> <span className={style.live}>Live</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.matches} className={style.icons} icon={faGratipay} /> <span className={style.match}>Matches</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.hot} className={style.icons} icon={faGripfire} /> <span className={style.hot}>Hot or Not</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.chat} className={style.icons} icon={faComment} /> <span className={style.chatroom}>Chatrooms</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.events} className={style.icons} icon={faCalendarDay} /> <span className={style.event}>Events</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.groups} className={style.icons} icon={faUsers} /> <span className={style.group}>Groups</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}>  <FontAwesomeIcon id={style.blogs} className={style.icons} icon={faBlogger} /> <span className={style.blog}>Blogs</span></ListGroup.Item>
                        </ListGroup>
                        <ListGroup className="mt-2" style={{ borderRadius: '1rem' }} data-aos="fade-up">
                            <ListGroup.Item style={{ border: '0px' }}> <span className={style.colGroup}>Subscriptions</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={alisa} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alisa</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupOne} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alex Roy</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupTwo} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Jonny Bairstow</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupThree} className={style.colRightImg} alt="" /><span className={style.colLeftText}>David warnor</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFour} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alisa jamjom</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFive} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alex hook</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={rahat} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Glenn Maxwell</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}><span className={style.show}>Show 23 more</span> <FontAwesomeIcon id={style.down} icon={faChevronDown} /> </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className="mt-2" style={{ borderRadius: '1rem' }} data-aos="fade-up">
                            <ListGroup.Item style={{ border: '0px' }}> <span className={style.colGroup}>Favorites</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={alisa} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alisa</span> <span className={style.colActive}>.</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupOne} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alex Roy</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupTwo} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Jonny Bairstow</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupThree} className={style.colRightImg} alt="" /><span className={style.colLeftText}>David warnor</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFour} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alisa jamjom</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFive} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Alex hook</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={rahat} className={style.colRightImg} alt="" /><span className={style.colLeftText}>Glenn Maxwell</span> <span className={style.colActive}></span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}><span className={style.show}>Show 10 more</span> <FontAwesomeIcon id={style.down} icon={faChevronDown} /> </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-7" data-aos="fade-up">
                        <Navbar id={style.navBg} expand="lg">
                            <Container>
                                <Navbar.Brand href="#" style={{ marginRight: '-6rem' }}>
                                    <img src={alisa} className={style.logo} alt="" />
                                </Navbar.Brand>
                                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >

                                    </Nav>
                                    <Form className="mx-5 w-100 d-flex justify-content-center" id={style.searchForm}>
                                        <FormControl
                                            type="search"
                                            placeholder="Write something here"
                                            className="me-5 rounded-pill"
                                            aria-label="Search"
                                            id={style.form}

                                        />
                                        
                                    </Form>
                                    <div className="d-flex justify-content-center align-items-center" id={style.icons}>
                                        <span className={style.video}><FontAwesomeIcon id={style.upVideo} className={style.icons} icon={faVideo} /></span>
                                        <span className={style.gallery}><FontAwesomeIcon id={style.gallery} className={style.icons} icon={faImages} /></span>
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        {/* post one*/}
                        <Card className="mt-2" style={{ borderRadius: '1rem', boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 0px -1px;' }} data-aos="fade-up">
                            <div className="container d-flex justify-content-between align-items-center mt-2">
                                <div className="d-flex">
                                    <img src={alisa} className={style.userPhoto} alt="" />

                                    <div className="d-block lh-1 text-start justify-content-center align-items-center">
                                        <h6 className={style.userName}>Alisa jenn</h6>
                                        <h6 className={style.sponsored}>Sponsored</h6>
                                    </div>

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
                                <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id={style.cardFotter} style={{cursor:'pointer'}}>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faHeart} /> 167</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faComment} /> 10</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faShare} /> 3</span>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* post two */}
                        <Card className="mt-2" style={{ borderRadius: '1rem', boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 0px -1px;' }} data-aos="fade-up">
                            <div className="container d-flex justify-content-between align-items-center mt-2">
                                <div className="d-flex">
                                    <img src={alisa} className={style.userPhoto} alt="" />

                                    <div className="d-block lh-1 text-start justify-content-center align-items-center">
                                        <h6 className={style.userName}>Alisa jenn</h6>
                                        <h6 className={style.sponsored}>Sponsored</h6>
                                    </div>

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
                                <Card.Img variant="top" src={postTwo} />
                                <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id={style.cardFotter} style={{cursor:'pointer'}}>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faHeart} /> 167</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faComment} /> 10</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faShare} /> 3</span>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* post three*/}
                        <Card className="mt-2" style={{ borderRadius: '1rem', boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 0px -1px;' }} data-aos="fade-up">
                            <div className="container d-flex justify-content-between align-items-center mt-2">
                                <div className="d-flex">
                                    <img src={alisa} className={style.userPhoto} alt="" />

                                    <div className="d-block lh-1 text-start justify-content-center align-items-center">
                                        <h6 className={style.userName}>Alisa jenn</h6>
                                        <h6 className={style.sponsored}>Sponsored</h6>
                                    </div>

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
                                <ReactPlayer
                                    controls
                                    width="100%"
                                    height="19rem"
                                    url="https://www.youtube.com/watch?v=eWUxqVFBq74" />
                                <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id={style.cardFotter} style={{cursor:'pointer'}}>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faHeart} /> 167</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faComment} /> 10</span>
                                    <span><FontAwesomeIcon id={style.heart} className={style.postReaction} icon={faShare} /> 3</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-2 mt-5 pt-1 mb-2" data-aos="fade-up">
                        <Card style={{ borderRadius: '1rem' }}>
                            <div className="d-flex justify-content-around align-items-center mt-2">
                                <FontAwesomeIcon id={style.cardHot} className={style.icons} icon={faGripfire} />
                                <span className={style.not}>Hot or Not</span>
                                <div className={style.newbtn}>
                                    <span className={style.btn}>New</span>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Img
                                    variant="top" src={shoe}
                                    style={{ borderRadius: '0.80rem', backgroundImage: 'linear-gradient(to bottom, #000000bd, #fa7ddf' }}
                                    className={style.image}
                                    id={style.colRight} />
                                <div className={style.textandIcon}>
                                    <span className={style.name}>Alice Adams</span>
                                </div>
                                <div className={style.text}>
                                    <FontAwesomeIcon id={style.cardHot} className={style.icons} icon={faGripfire} />
                                </div>
                                <span className={style.cardClick}>Click to play</span>
                            </Card.Body>
                        </Card>

                        <ListGroup className="mt-2" style={{ borderRadius: '1rem', cursor: 'pointer' }} data-aos="fade-up">
                            <ListGroup.Item style={{ border: '0px' }}> <FontAwesomeIcon id={style.group} icon={faUsers} /><span className={style.colGroup}>My Groups</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupOne} className={style.colRightImg} alt="" /><span className={style.colRightText}>Jayden Talks</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupTwo} className={style.colRightImg} alt="" /><span className={style.colRightText}>Love with brain</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupThree} className={style.colRightImg} alt="" /><span className={style.colRightText}>Briggs Tips</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFour} className={style.colRightImg} alt="" /><span className={style.colRightText}>Aiden Group</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={groupFive} className={style.colRightImg} alt="" /><span className={style.colRightText}>Campbell</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={rahat} className={style.colRightImg} alt="" /><span className={style.colRightText}>House of love</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}> <img src={alisa} className={style.colRightImg} alt="" /><span className={style.colRightText}>Patriot</span></ListGroup.Item>
                            <ListGroup.Item style={{ border: '0px' }}><span className={style.show}>Show 8 more</span> <FontAwesomeIcon id={style.down} icon={faChevronDown} /> </ListGroup.Item>
                        </ListGroup>

                        {/* sponsored */}
                        <Card className="mt-2" style={{ borderRadius: '0.5rem' }}>
                            <span className={style.sponsor}>Sponsored</span>
                                <Card.Img
                                    variant="top" src={groupFive}
                                    className={style.image}
                                    id={style.colRight} />
                        </Card>
                    </div>
                </div>
            </div>

        </section>
    )
}
