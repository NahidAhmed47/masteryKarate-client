import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import IconCart from "../../../../components/IconCart/IconCart";

const iconCartData = [
    {
        img: 'https://i.ibb.co/WDz1X3Z/kickboxing-1.png',
        hoverImg: 'https://i.ibb.co/ScnB0zk/kickboxing.png',
        title: 'Kickboxing'
    },
    {
        img: 'https://i.ibb.co/23BMxQh/boxing-1.png',
        hoverImg: 'https://i.ibb.co/kx2qk5S/boxing-3.png',
        title: 'Personal Boxing'
    },
    {
        img: 'https://i.ibb.co/MsvJHmS/karate.png',
        hoverImg: 'https://i.ibb.co/hLxtP5h/karate-1.png',
        title: 'Judo Karate'
    },
    {
        img: 'https://i.ibb.co/0K4gMTc/judo-1.png',
        hoverImg: 'https://i.ibb.co/gwG7fGn/judo-2.png',
        title: 'Mixed Martial Arts'
    },
    {
        img: 'https://i.ibb.co/NLJfktt/bodybuilding.png',
        hoverImg: 'https://i.ibb.co/0Z22LZD/bodybuilding-1.png',
        title: 'Body Building'
    },
    {
        img: 'https://i.ibb.co/xjb1Sj7/treadmill.png',
        hoverImg: 'https://i.ibb.co/Kj2yMSN/treadmill-1.png',
        title: 'Fitness Classes'
    },
    {
        img: 'https://i.ibb.co/H2JjpTn/weight-lifting.png',
        hoverImg: 'https://i.ibb.co/nDY0kj5/weight-lifting-1.png',
        title: 'Weight Lifting'
    },
    {
        img: 'https://i.ibb.co/ZcNz181/martial-arts.png',
        hoverImg: 'https://i.ibb.co/rcMKtXF/martial-arts-1.png',
        title: 'Self Defense'
    },
]

const TrainSection = () => {
  return (
    <div>
      <SectionHeader
        title={"Train With The Best Legends"}
        subTitle={"Our Features"}
      ></SectionHeader>
      <div className="max-container grid grid-cols-2 md:grid-cols-4 gap-8">
        {
            iconCartData.map((item, index) => <IconCart key={index} imgUrl={item.img} title={item.title} hoverImg={item.hoverImg}></IconCart>)
        }
      </div>
    </div>
  );
};

export default TrainSection;
