import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeProducts from './HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeProducts/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;