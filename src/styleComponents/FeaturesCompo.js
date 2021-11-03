
import { Avatar, CardContent, CardMedia, FormControl, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import alisa from '../img/alisa.png';
import './Styles/Features.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import BookIcon from '@mui/icons-material/Book';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import imran from '../img/imran.jpg';
import subsdata from './Data/Subuserdata';
import fav from './Data/Favorites';
import ColRight from './ColRight';
import ColCenter from './ColCenter';

export default function FeaturesCompo() {

    const [subs, setSubs] = useState([])
    const [favo, setFav] = useState([])

    useEffect(() => {
        setSubs(subsdata)
        setFav(fav)
    }, [])

    return (
        <section className="features-compo" style={{ marginTop: '-2.5em' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mb-3">

                        <List style={{ borderRadius: '1rem', backgroundColor: 'white' }} >
                            <ListItem>
                                <ListItemAvatar>
                                    <FavoriteIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Home
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <VideocamIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Live
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <FavoriteIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Matches
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <LocalFireDepartmentIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Hot or Not
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <ChatIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Chatrooms
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <EventIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Events
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <GroupsIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Groups
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <BookIcon className="icons" />
                                </ListItemAvatar>
                                <ListItemText className="text">
                                    Blogs
                                </ListItemText>
                            </ListItem>
                        </List>

                        {/* subscriptions */}
                        <div className="Subscriptions mt-3">
                            <List style={{ borderRadius: '1rem', backgroundColor: 'white' }} >
                                <ListItem>
                                    <ListItemText className="">
                                        Subscriptions
                                        <span className="active"></span>
                                    </ListItemText>
                                </ListItem>

                                {
                                    subs.map((singleSubs) => (
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src={singleSubs.image} />
                                            </ListItemAvatar>
                                            <ListItemText className="text">
                                                {singleSubs.name}
                                                <span className="active"></span>
                                            </ListItemText>
                                        </ListItem>
                                    ))
                                }
                                <ListItemText className="text-center fs-5">
                                    show more 23
                                    <KeyboardArrowDownOutlinedIcon className="downArrow" />
                                </ListItemText>
                            </List>
                        </div>

                        {/* favorites*/}
                        <div className="Subscriptions mt-3">
                            <List style={{ borderRadius: '1rem', backgroundColor: 'white' }} >
                                <ListItem>
                                    <ListItemText className="">
                                        Favorites
                                        <span className="active"></span>
                                    </ListItemText>
                                </ListItem>

                                {
                                    favo.map((singleFav) => (
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src={singleFav.image} />
                                            </ListItemAvatar>
                                            <ListItemText className="text">
                                                {singleFav.name}
                                                <span className="active"></span>
                                            </ListItemText>
                                        </ListItem>

                                    ))
                                }
                                <ListItemText className="text-center fs-5">
                                    show more 10
                                    <KeyboardArrowDownOutlinedIcon className="downArrow" />
                                </ListItemText>
                            </List>
                        </div>
                    </div>

                    {/* col center */}
                    <div className="col-md-8">
                        <ColCenter />
                    </div>

                    {/* hot or not */}
                    <div className="col-md-2 mt-5 pt-2">
                        <ColRight />
                    </div>
                </div>
            </div>

        </section>
    )
}
