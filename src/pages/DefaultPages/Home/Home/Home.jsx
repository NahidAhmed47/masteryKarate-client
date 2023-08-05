import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstructorSection from '../InstructorsSection/InstructorSection';
import setTitle from '../../../../utls/setTitle';
import PopularServices from '../PopularServices/PopularServices';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';

const Home = () => {
    setTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <InstructorSection></InstructorSection>
            <PopularServices></PopularServices>
            <ExperienceCounter></ExperienceCounter>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;