import React  from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import ClassCard from '../../../../components/ClassCard/ClassCard';
import useApprovedClasses from '../../../../hooks/useApprovedClasses';
import CardContainer from '../../../../components/CardContainer/CardContainer';

const PopularClasses = () => {
  const [approvedClasses] = useApprovedClasses();
  const separateByDescending = (data, property)=>{
    return [...data].reduce((acc, currentObj) => {
        const index = acc.findIndex((item) => currentObj[property] >= item[property]);
        if (index === -1) {
          acc.push(currentObj);
        } else {
          acc.splice(index, 0, currentObj);
        }
        return acc;
      }, []);
  }
  const separatedClasses = separateByDescending(approvedClasses, "number_of_student").slice(0,6);
  return (
    <div className='my-14 md:my-24 max-container'>
        <SectionHeader title="Popular Classes" subTitle="Best Selling"></SectionHeader>
        <CardContainer classesData={separatedClasses}></CardContainer>
    </div>
  );
};

export default PopularClasses;
