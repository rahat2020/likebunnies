import React from 'react';
import FeaturesCompo from '../../../styleComponents/FeaturesCompo';
import StoryCompo from '../../../styleComponents/StoryCompo';
import TopnavCompo from '../../../styleComponents/TopnavCompo';
// import Features from './Features/Features';
// import Story from './Story/Story';

export default function Home() {
    return (
        <>
           <TopnavCompo/>
           <StoryCompo/>
           <FeaturesCompo/>
        </>
    )
}
