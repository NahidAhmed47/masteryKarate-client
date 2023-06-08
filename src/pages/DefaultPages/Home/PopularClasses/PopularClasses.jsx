import React  from 'react';
import useClasses from '../../../../hooks/useClasses';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import ClassCard from '../../../../components/ClassCard/ClassCard';

const PopularClasses = () => {
  const [classes] = useClasses();
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
  const separatedClasses = separateByDescending(classes, "number_of_student");
  console.log(separatedClasses)
  return (
    <div className='my-14 md:my-24 max-container'>
        <SectionHeader title="Popular Classes" subTitle="Best Selling"></SectionHeader>
        <div className='grid md:grid-cols-2 gap-5 md:gap-8 mt-8'>
          {
            separatedClasses?.map(classes => <ClassCard key={classes._id} classes={classes}></ClassCard>)
          }
        </div>
    </div>
  );
};

export default PopularClasses;
