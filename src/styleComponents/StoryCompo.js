import { CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Styles/Story.css';
import alisa from '../img/alisa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faCrown, faHeart, faPlus, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import wrappercomponent from './Data/Data';
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
                    <div className="col-2 mt-3">
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
                    <div className="col-2 mt-3 d-flex justify-content-center align-items-start">
                        <div className="create-story">
                            <Card className="" style={{ borderRadius: '1rem', cursor: 'pointer', width: '5.6rem' }}  >
                                <div className="colRightImg">
                                    <CardMedia
                                        component="img"
                                        className="create-img"
                                        image={alisa}
                                        alt="alisa"
                                    />
                                </div>
                                <CardContent>
                                    {/* <Typography gutterBottom component="div" className="title">
                                    alisa
                                </Typography> */}
                                    <Typography variant="body2" color="text.secondary" className="ProfileIcons title">
                                        create story
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                    <div className="col-6 mt-3">

                        {/* <div className="col"> */}

                        <div className="row">

                            {
                                picture?.slice(0, 5).map((pictures) => (


                                    <div className="col story">

                                        <Card style={{ borderRadius: '1rem', width: '5.5rem' }}>
                                            <CardMedia
                                                className="storyImg"
                                                width="50"
                                                component="img"
                                                height="100"
                                                alt="green iguana"
                                                image={pictures.profile_picture}
                                            />
                                            <CardContent className="cardContent">
                                                <CardMedia
                                                    className="storyProfile"
                                                    component="img"
                                                    alt="green iguana"
                                                    image={pictures.profile_picture}
                                                />
                                                <Typography variant="span" className="storyProfileName">
                                                    <div className="profileName">
                                                        {pictures.profile_name}
                                                    </div>
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    </div>

                                ))
                            }
                            {/* </div> */}

                        </div>


                    </div>
                    <div className="col-2 mt-3">
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
