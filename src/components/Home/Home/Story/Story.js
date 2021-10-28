import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Story.module.css';
import { Card } from 'react-bootstrap';
import alisa from '../../../../img/alisa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faHeart, faStar, faTrophy, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Story() {
    return (
        <section className="" id={style.story}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mt-3">
                        <Card style={{ width: '15rem', borderRadius: '1rem', border: 'none' }}>
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

                    {/* create story */}

                    <div className="col mt-3">
                        <Card style={{ marginLeft: '5rem', width: '6rem', height: '100%', borderRadius: '1rem', border: 'none' }}>
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
                    </div>
                    {/* two */}
                    
                    <div className="col mt-3">
                        <Card style={{ marginLeft: '-0.90rem', width: '6rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem'}} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>
                    {/* three */}
                    <div className="col mt-3">
                        <Card style={{ marginLeft: '-3.75rem', width: '6rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem'}} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>
                    {/* four */}
                    <div className="col mt-3">
                        <Card style={{ marginLeft: '-6.70rem', width: '6rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem'}} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>
                    {/* five */}
                    <div className="col mt-3">
                        <Card style={{ marginLeft: '-9.75rem', width: '6rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem'}} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>
                    {/* six */}
                    <div className="col mt-3">
                        <Card style={{  marginLeft: '-12.90rem',width: '6rem', height: '100%', borderRadius: '2rem', border: 'none' }}>
                            <div className={style.createStory}>
                                <Card.Img
                                    className="w-100 h-100"
                                    variant="top"
                                    src={alisa}
                                    id={style.createStoryImg}
                                    style={{ borderRadius: '0rem 0rem 1rem 1rem'}} />
                            </div>
                            <div className={style.profile}>
                                <img src={alisa} className="" id={style.personProfile} alt="" />  <br />
                                <span className={style.personProfileText}>alisha</span>
                            </div>
                        </Card>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}
