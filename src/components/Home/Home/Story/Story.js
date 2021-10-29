import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Story.module.css';
import { Card, Button } from 'react-bootstrap';
import alisa from '../../../../img/alisa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faHeart, faStar, faTrophy, faPlus, faCrown } from '@fortawesome/free-solid-svg-icons';

export default function Story() {
    return (
        <section className="" id={style.story}>
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-3">
                        <Card style={{ borderRadius: '1rem', border: 'none' }}>
                            <div className={style.storyImg}>
                                <Card.Img variant="top" src={alisa} id={style.cardImg} />
                            </div>

                            <Card.Body>
                                <Card.Title className={style.title}>Alisa@1234</Card.Title>
                                <div className={style.icons}>
                                    <span className={style.iconsText}>  <FontAwesomeIcon id={style.carrot} className={style.icons} icon={faCarrot} /><span className={style.Text}>500</span></span>
                                    <span className={style.iconsText}>  <FontAwesomeIcon id={style.heart} className={style.icons} icon={faHeart} /><span className={style.Text}>258</span></span>
                                    <span className={style.iconsText}>  <FontAwesomeIcon id={style.star} className={style.icons} icon={faStar} /><span className={style.Text}>583</span></span>
                                    <span className={style.iconsText}>  <FontAwesomeIcon id={style.trophy} className={style.icons} icon={faTrophy} /><span className={style.Text}>7.5</span></span>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* story */}
                    <div className="col-md-7 d-flex justify-content-around align-items-center mt-3">
                        {/* <div className="col mt-3"> */}
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '1rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img className="w-100 h-100" variant="top" src={alisa} id={style.createStoryImg} />
                            </div>
                            <div className={style.add}>
                                <FontAwesomeIcon className={style.plus} icon={faPlus} />
                            </div>
                            <Card.Body>
                                <Card.Text className={style.createStoryText}> create story</Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </div> */}

                        {/* two */}

                        {/* <div className="col mt-3"> */}
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem' }} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                        {/* </div> */}

                        {/* three */}
                        {/* <div className="col mt-3"> */}
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem' }} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem' }} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem' }} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                        <Card style={{ marginLeft: '1rem', width: '20rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem' }} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>

                    <div className="col-md-2 mt-3">
                        <Card id={style.colRight} style={{ width: '10rem', height: '125%', borderRadius: '1rem', border: 'none' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon className={style.crowns} icon={faCrown} />
                            </div>

                            <Card.Title className={style.colRightTitle}>You are in the club</Card.Title>

                            <Card.Text className={style.colRightText}>
                                Some quick example text to build on the fadhur
                            </Card.Text>
                            <Button id={style.tryBtn}>Try now</Button>
                        </Card>
                    </div>
                </div>
            </div>

        </section>
    )
}
