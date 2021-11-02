import { CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Styles/Story.css';
import alisa from '../img/alisa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faCrown, faHeart, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import wrappercomponent from './Data/Data';
import imran from '../img/imran.jpg';
import Button from '@restart/ui/esm/Button';

export default function StoryCompo() {

    const [picture, setPicture] = useState([])

    useEffect(() => {
        setPicture(wrappercomponent)
    }, [])
    return (
        <section className="story-compo">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mt-3">
                        <Card className="w-100" style={{ borderRadius: '1rem', cursor: 'pointer' }}  >
                            <div className="colRightImg">
                                <CardMedia
                                    component="img"
                                    className="image"
                                    image={alisa}
                                    alt="alisa"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom component="div" className="title">
                                    alisa
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="ProfileIcons">
                                    <div className="icons">
                                        <span className="iconsText">  <FontAwesomeIcon id="carrot" className="icons" icon={faCarrot} /><span className="Text">500</span></span>
                                        <span className="iconsText">  <FontAwesomeIcon id="heart" className="icons" icon={faHeart} /><span className="Text">258</span></span>
                                        <span className="iconsText">  <FontAwesomeIcon id="star" className="icons" icon={faStar} /><span className="Text">583</span></span>
                                        <span className="iconsText">  <FontAwesomeIcon id="trophy" className="icons" icon={faTrophy} /><span className="Text">7.5</span></span>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-1 mt-3">
                        <Card style={{width:"100%", height:"12rem"}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                width="100"
                                className="createStoryImg"
                                image={imran}
                            />
                            <CardContent>
                                <Typography gutterBottom component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-7 mt-3">

                        {/* <div className="col"> */}

                        <div className="row">

                            {
                                picture?.slice(0, 5).map((pictures) => (

                                    <div className="col story">
                                        <Card style={{borderRadius: '1rem'}}>
                                            <CardMedia
                                                className="storyImg"
                                                width="50"
                                                height="100"
                                                component="img"
                                                alt="green iguana"
                                                image={pictures.profile_picture}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5">
                                                    Lizard
                                                </Typography>
                                                <Typography color="text.secondary">
                                                    Lorem ipsum dolor sit.
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    </div>

                                ))
                            }
                            {/* </div> */}

                        </div>


                    </div>
                    <div className="col-md-2 mt-3">
                        <Card className="colRight" style={{ border: 'none', cursor: 'pointer', borderRadius: '1rem' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon className="crowns" icon={faCrown} />
                                </Typography>
                                <Typography variant="body2" className="">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.
                                </Typography>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <Button className="btnTry" size="small">Try now</Button>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
