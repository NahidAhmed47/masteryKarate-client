import React from "react";
import PopularServicesCard from "../../../../components/PopularServicesCard/PopularServicesCard";

const popularServicesData = [
  {
    id: 1,
    img: "https://i.ibb.co/HFpsM6Q/services-img-5.png",
    title: "Professional Trainer",
    description:
      "It is a long established fact that reader will be distracted page its when looking at its layout.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/CM97CK9/services-img-6.png",
    title: "Professional Trainer",
    description:
      "It is a long established fact that reader will be distracted page its when looking at its layout.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/1fBDXMr/services-img-7.png",
    title: "Professional Trainer",
    description:
      "It is a long established fact that reader will be distracted page its when looking at its layout.",
  },
  {
    id: 4,
    img: "https://i.ibb.co/2jsM3C2/services-img-8.png",
    title: "Professional Trainer",
    description:
      "It is a long established fact that reader will be distracted page its when looking at its layout.",
  },
];

const PopularServices = () => {
  return (
    <div className="h-[500px] md:h-[550px] w-full bg-[url('https://i.ibb.co/d4Lrcq0/bg-cover.jpg')] bg-cover relative mb-[280px]">
      <div className=" w-full h-full bg-black bg-opacity-70 ">
        <div className="max-container p-4 h-full w-full">
          <div className="text-center pt-10 md:pt-[75px] pb-3">
            <p className="text-primary font-kanit text-base font-bold">
              What We Offer
            </p>
            <h1
              className={`text-2xl md:text-3xl font-kanit font-extrabold text-white md:mt-2`}
            >
              Our Popular Services
            </h1>
          </div>
          <div className="mt-12 md:mt-20 overflow-auto pb-10 min-w-[1300px]">
            <div className="grid grid-cols-4 gap-8 min-w-[1300px]">
              {popularServicesData.map((service) => (
                <PopularServicesCard
                  key={service.id}
                  service={service}
                ></PopularServicesCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
