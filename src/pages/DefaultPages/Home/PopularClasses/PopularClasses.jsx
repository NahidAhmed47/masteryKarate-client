import React, { useEffect, useState }  from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import CardContainer from '../../../../components/CardContainer/CardContainer';
import axios from 'axios';

const PopularClasses = () => {
  const [popularClasses , setPopularClasses] = useState([]);
  useEffect(()=>{
    axios.get('https://mastery-karate-server.vercel.app/popular-classes')
    .then(res => setPopularClasses(res.data))
  },[])
  return (
    <div className='my-14 md:my-24 max-container'>
        <SectionHeader title="Popular Classes" subTitle="Best Selling"></SectionHeader>
        <CardContainer classesData={popularClasses}></CardContainer>
    </div>
  );
};

export default PopularClasses;
