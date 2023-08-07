import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useApprovedClasses from "../../../hooks/useApprovedClasses";
import CardContainer from "../../../components/CardContainer/CardContainer";
import setTitle from "../../../utls/setTitle";

const Classes = () => {
  const [approvedClasses] = useApprovedClasses();
  setTitle("Classes");
  return (
    <div className={`pt-14 md:pt-40`}>
      <PagesBanner
        img="https://i.ibb.co/mTZ3j0G/classes-Page-removebg-preview.png"
        title="All Mastery Classes"
      ></PagesBanner>
      <div className="max-container my-10 md:my-16">
        <SectionHeader
          title="Select Class & Gain Skills"
          subTitle="Classes"
        ></SectionHeader>
        <CardContainer classesData={approvedClasses}></CardContainer>
      </div>
    </div>
  );
};

export default Classes;
