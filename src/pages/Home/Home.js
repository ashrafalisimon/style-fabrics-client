import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeProducts from './HomeProducts';
import Reviews from './Reviews';
import WeAre from './WeAre';
import WorkingProcess from './WorkingProcess';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WeAre/>
            <HomeProducts/>
            <BusinessSummary/>
            <WorkingProcess/>
            <Reviews/>
            
        </div>
    );
};

export default Home;