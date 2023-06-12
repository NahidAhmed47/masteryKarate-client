import React from 'react';
import setTitle from '../../../utls/setTitle';
import PagesBanner from '../../../components/PagesBanner/PagesBanner';

const Contract = () => {
    setTitle('Contract')
    return (
        <div className='pt-14 md:pt-40'>
            <PagesBanner img="" title="Contract Us"></PagesBanner>
            <div className='min-h-[30vh] flex justify-center items-center text-primary'>
                <p><i>Features coming soon!</i></p>
            </div>
        </div>
    );
};

export default Contract;