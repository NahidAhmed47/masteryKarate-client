import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstructorSection from '../InstructorsSection/InstructorSection';
import setTitle from '../../../../utls/setTitle';
import PopularServices from '../PopularServices/PopularServices';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';
import TrainSection from '../TrainSection/TrainSection';

const Home = () => {
    setTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PopularServices></PopularServices>
            <TrainSection></TrainSection>
            <InstructorSection></InstructorSection>
            <ExperienceCounter></ExperienceCounter>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;