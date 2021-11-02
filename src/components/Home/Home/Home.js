import React from 'react';
import FeaturesCompo from '../../../styleComponents/FeaturesCompo';
import StoryCompo from '../../../styleComponents/StoryCompo';
// import TopnavCompo from '../../../styleComponents/TopnavCompo';
// import Features from './Features/Features';
// import Story from './Story/Story';
import TopNav from './TopNav/TopNav';

export default function Home() {
    return (
        <>
           <TopNav/>
           {/* <Story/>
           <Features/> */}

           {/* <TopnavCompo/> */}
           <StoryCompo/>
           <FeaturesCompo/>
        </>
    )
}
