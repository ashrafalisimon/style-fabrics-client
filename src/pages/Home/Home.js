import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeProducts from './HomeProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeProducts/>
            <BusinessSummary/>
            <Reviews/>
        </div>
    );
};

export default Home;