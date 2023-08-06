import React from 'react';
import setTitle from '../../../utls/setTitle';
import PagesBanner from '../../../components/PagesBanner/PagesBanner';
import AboutUs from '../Home/AboutUs/AboutUs';
import ExperienceCounter from '../Home/ExperienceCounter/ExperienceCounter';
import Subscribe from '../../../components/Subscribe/Subscribe';

const About = () => {
    setTitle('About');
    return (
        <div className='pt-14 md:pt-40'>
            <PagesBanner img="" title="About Us"></PagesBanner>
            <div className='max-container'>
                <AboutUs></AboutUs>
                <ExperienceCounter></ExperienceCounter>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default About;