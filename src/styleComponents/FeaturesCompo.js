import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import alisa from '../img/alisa.png'
export default function FeaturesCompo() {
    return (
        <section>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt="img"
                                src={alisa}
                            />
                        </ListItemAvatar>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            </List>
        </section>
    )
}
