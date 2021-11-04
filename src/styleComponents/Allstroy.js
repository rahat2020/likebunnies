import React, { useEffect, useState } from 'react'
import TopnavCompo from './TopnavCompo'
import wrappercomponent from './Data/Data';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export default function Allstroy() {
    const [picture, setPicture] = useState([])

    useEffect(() => {
        setPicture(wrappercomponent)
    }, [])
    return (
        <section>
            <TopnavCompo/>
            
            <div className="container">
                <div className="row mt-3">
                    {/* <div className="col-3"> */}
                    {
                                picture.map((pictures) => (


                                    <div className="col-4 story">

                                        <Card style={{ borderRadius: '1rem', width: '5.6rem' }}>
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
         
        </section>
    )
}
