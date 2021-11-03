import { Card, CardContent, CardMedia, TextField, Typography } from '@material-ui/core'
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideocamIcon from '@material-ui/icons/Videocam';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import postOne from '../img/postOne.jpg'
import postThree from '../img/postThree.jpg'
import postTwo from '../img/postTwo.jpg'
import alisa from '../img/alisa.png';

export default function ColCenter() {
    return (
        <section>
            <Navbar id="navBg" expand="lg">
                <Container>
                    <Navbar.Brand href="#" style={{ marginRight: '-6rem' }}>
                        <img src={alisa} className="logo" alt="" />
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="mx-5 w-100 d-flex justify-content-center" id="searchForm">
                            {/* <FormControl
                                            type="search"
                                            placeholder="Write something here"
                                            className="me-5 rounded-pill"
                                            aria-label="Search"
                                            id="form"

                                        /> */}
                            <TextField className="writeInput" fullWidth label="fullWidth" id="fullWidth" />
                        </Form>
                        <div className="d-flex justify-content-center align-items-center" id="icons">
                            <span className="video"> <VideocamIcon id="upVideo" className="icons" /></span>
                            <span className="gallery"><PermMediaIcon id="gallery" className="icons" /></span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* post of users */}
            <Card className="mt-3" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>
                <div className="container d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex">
                        <img src={alisa} className="userPhoto" alt="" />
                        <div className="d-block lh-1 text-start justify-content-center align-items-center">
                            <h6 className="userName">Alisa</h6>
                            <h6 className="sponsored">Sponsored</h6>
                        </div>
                    </div>
                    <div className="edit">
                        <MoreHorizIcon className="icons" id="edit" />
                    </div>
                </div>
                <Typography className="container" variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, non!
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={postOne}
                    alt="Post picture"
                />
                <CardContent>
                    <Typography>
                        <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id="cardFotter" style={{ cursor: 'pointer' }}>
                            <span><FavoriteBorderOutlinedIcon className="postReaction" /> 167</span>
                            <span><ModeCommentOutlinedIcon className="postReaction" /> 10</span>
                            <span><ShareOutlinedIcon className="postReaction" /> 3</span>
                        </div>
                    </Typography>
                </CardContent>
            </Card>

            {/* card two */}
            <Card className="mt-3" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>
                <div className="container d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex">
                        <img src={alisa} className="userPhoto" alt="" />
                        <div className="d-block lh-1 text-start justify-content-center align-items-center">
                            <h6 className="userName">Alisa</h6>
                            <h6 className="sponsored">Sponsored</h6>
                        </div>
                    </div>
                    <div className="edit">
                        <MoreHorizIcon className="icons" id="edit" />
                    </div>
                </div>
                <Typography className="container" variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, non!
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={postThree}
                    alt="Post picture"
                />
                <CardContent>
                    <Typography>
                        <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id="cardFotter" style={{ cursor: 'pointer' }}>
                            <span><FavoriteBorderOutlinedIcon className="postReaction" /> 167</span>
                            <span><ModeCommentOutlinedIcon className="postReaction" /> 10</span>
                            <span><ShareOutlinedIcon className="postReaction" /> 3</span>
                        </div>
                    </Typography>
                </CardContent>
            </Card>

            {/* card three */}
            <Card className="mt-3" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>
                <div className="container d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex">
                        <img src={alisa} className="userPhoto" alt="" />
                        <div className="d-block lh-1 text-start justify-content-center align-items-center">
                            <h6 className="userName">Alisa</h6>
                            <h6 className="sponsored">Sponsored</h6>
                        </div>
                    </div>
                    <div className="edit">
                        <MoreHorizIcon className="icons" id="edit" />
                    </div>
                </div>
                <Typography className="container" variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, non!
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={postTwo}
                    alt="Post picture"
                />
                <CardContent>
                    <Typography>
                        <div className="d-flex justify-content-between align-items-center mt-3 me-5 ms-5" id="cardFotter" style={{ cursor: 'pointer' }}>
                            <span><FavoriteBorderOutlinedIcon className="postReaction" /> 167</span>
                            <span><ModeCommentOutlinedIcon className="postReaction" /> 10</span>
                            <span><ShareOutlinedIcon className="postReaction" /> 3</span>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </section>
    )
}
