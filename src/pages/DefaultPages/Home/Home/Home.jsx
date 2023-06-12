import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstructorSection from '../InstructorsSection/InstructorSection';
import setTitle from '../../../../utls/setTitle';

const Home = () => {
    setTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PopularClasses></PopularClasses>
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default Home;