import React from 'react';
import CountInView from '../../../../components/ExperienceCounter/CountInView';

const ExperienceCounter = () => {
    return (
        <div className='max-container my-14 md:mb-20 grid grid-cols-2 md:grid-cols-4 justify-items-center border-b pb-5 border-primary'>
            <div className=''>
                <CountInView start={0} end={100} duration={2} />
                <div className='text-lg md:text-xl font-semibold text-[#666666] '>Years of Experience</div>
            </div>
            <div className=''>
                <CountInView start={0} end={595} duration={2} />
                <div className='text-lg md:text-xl font-semibold text-[#666666]'>Total Members</div>
            </div>
            <div className=''>
                <CountInView start={0} end={80} duration={2} />
                <div className='text-lg md:text-xl font-semibold text-[#666666] '>Professional Trainers</div>
            </div>
            <div className=''>
                <CountInView start={0} end={620} duration={2} />
                <div className='text-lg md:text-xl font-semibold text-[#666666] '>Success Stories</div>
            </div>
        </div>
    );
};

export default ExperienceCounter;