import React from 'react';
import CountInView from '../../../../components/ExperienceCounter/CountInView';
import useTheme from '../../../../hooks/useTheme';

const ExperienceCounter = () => {
    const {isDarkMode} = useTheme();
    return (
        <div className='max-container my-14 md:mb-20 grid grid-cols-2 md:grid-cols-4 gap-y-5 justify-items-center  py-10 rounded-md shadow '>
            <div className=''>
                <CountInView start={0} end={100} duration={2} />
                <div className={`text-lg md:text-xl font-semibold text-[#666666]  ${isDarkMode ? 'text-slate-200' : ''}`}>Years of Experience</div>
            </div>
            <div className=''>
                <CountInView start={0} end={595} duration={2} />
                <div className={`text-lg md:text-xl font-semibold text-[#666666] <ButtonOutline text={"See All Classes"} icon={true}></ButtonOutline> ${isDarkMode ? 'text-slate-200' : ''}`}>Total Members</div>
            </div>
            <div className=''>
                <CountInView start={0} end={80} duration={2} />
                <div className={`text-lg md:text-xl font-semibold text-[#666666] <ButtonOutline text={"See All Classes"} icon={true}></ButtonOutline>  ${isDarkMode ? 'text-slate-200' : ''}`}>Professional Trainers</div>
            </div>
            <div className=''>
                <CountInView start={0} end={620} duration={2} />
                <div className={`text-lg md:text-xl font-semibold text-[#666666] <ButtonOutline text={"See All Classes"} icon={true}></ButtonOutline> ${isDarkMode ? 'text-slate-200' : ''}`}>Success Stories</div>
            </div>
        </div>
    );
};

export default ExperienceCounter;