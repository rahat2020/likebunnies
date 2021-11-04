import { Avatar, Card, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Typography, CardContent } from '@material-ui/core';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SettingsIcon from '@mui/icons-material/Settings';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import alisa from '../img/alisa.png';
import './Styles/CreateStory.css';
import React from 'react';

export default function CreateStory() {
    return (
        <section className="overflow-hidden">

            <div className="row" style={{backgroundColor: '#242526'}}>
                <div className="col-4 createLeft h-100">
                    <List style={{ borderRadius: '1rem' }} >
                        <ListItem>
                            <ListItemText className="create">
                                Your story
                            </ListItemText>
                            <ListItemAvatar>
                                <SettingsIcon className="settings" />
                            </ListItemAvatar>

                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={alisa} className="your-img" />
                            </ListItemAvatar>
                            <ListItemText className="create">
                                Alisa
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
                <div className="col-8 colstoryRight">
                    <div className="right d-flex justify-content-center align-items-center mt-5 pt-5">
                        <Card className="createPhoto mt-3 mx-2" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>

                            <CardContent className="storyCard justify-content-center align-items-center mt-4 pt-4">
                                <span className="createIcon"><PermMediaIcon id="createIcon" className="" /></span> 
                                <span className="text-white text-center fw-bold">create a Photo Story</span>
                               
                            </CardContent>

                        </Card>
                        <Card className="mt-3 createText" sx={{ maxWidth: 745 }} style={{ borderRadius: '1rem' }}>
                            <CardContent className=" justify-content-center align-items-center mt-4 pt-4">
                                <span className="createIcon"><SortByAlphaIcon id="createIcon" className="" /></span>
                                <span className="text-white text-center fw-bold">create a Text Story</span>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    )
}
