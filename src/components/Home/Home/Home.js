import React from 'react';
import Features from './Features/Features';
import Story from './Story/Story';
import TopNav from './TopNav/TopNav';

export default function Home() {
    return (
        <div>
           <TopNav/>
           <Story/>
           <Features/>
        </div>
    )
}
