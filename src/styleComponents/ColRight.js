import React, { useEffect, useState } from 'react';
import { Avatar, CardContent, CardMedia, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Styles/Features.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import imran from '../img/imran.jpg';
import { Card } from '@mui/material';
import group from './Data/Mygroups';
import shoe from '../img/shoe.jpg';

export default function ColRight() {

    const [groups, setgroups] = useState([])

    useEffect(() => {
        setgroups(group)
    }, [])
    return (
        <div>
            <Card  style={{ borderRadius: '1rem' }}>
                <div className="d-flex justify-content-around align-items-center mt-2 mb-2">
                    <LocalFireDepartmentIcon id="cardHot" />
                    <span className="not">Hot or Not</span>
                    <div className="newbtn">
                        <span className="btnNew">New</span>
                    </div>
                </div>
                <CardMedia
                    component="img"
                    height="180"
                    image={imran}
                    alt="green iguana"
                />
                <CardContent>
                    <div className="textandIcon">
                        <span className="name">Alice Adams</span>
                    </div>
                    <div className="colRightCircle">
                        {/* <FontAwesomeIcon id={style.cardHot} className={style.icons} icon={faGripfire} /> */}
                        <LocalFireDepartmentIcon id="cardHot" />
                    </div>
                    <span className="cardClick">Click to play</span>
                </CardContent>
            </Card>

            {/* my groups */}
            <div className="groups">
                <div className="Subscriptions mt-3">
                    <List style={{ borderRadius: '1rem', backgroundColor: 'white' }} >
                        <ListItem>
                            <ListItemText className="">
                                Favorites
                                <span className="active"></span>
                            </ListItemText>
                        </ListItem>

                        {
                            groups.map((singleGroup) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={singleGroup.image} />
                                    </ListItemAvatar>
                                    <ListItemText className="text">
                                        {singleGroup.name}
                                        <span className="active"></span>
                                    </ListItemText>
                                </ListItem>

                            ))
                        }
                        <ListItemText className="text-center fs-5">
                            show more 9
                            <KeyboardArrowDownOutlinedIcon className="downArrow" />
                        </ListItemText>
                    </List>
                </div>
            </div>

            <Card className="mt-3" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>
                <span className="sponsor text">Sponsored</span>
                <CardMedia
                    component="img"
                    height="200"
                    image={shoe}
                    alt="Post picture"
                />
            </Card>
        </div>
    )
}
