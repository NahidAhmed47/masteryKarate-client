import React from 'react';

const IconCart = ({imgUrl, title, hoverImg}) => {
    return (
        <div className="h-[150px] md:h-[200px] w-full bg-white shadow-md flex flex-col justify-center items-center rounded-md group hover:-translate-y-2 duration-500">
          <div className=" h-24 w-24 rounded-full bg-gray-100 relative overflow-hidden ">
            <div className="w-20 h-20 absolute z-10 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <img
                src={imgUrl}
                className="group-hover:-translate-y-[120%] transition-all duration-500"
              ></img>
              <img
                src={hoverImg}
                className="translate-y-10 group-hover:-translate-y-[100%] transition-all duration-500"
              ></img>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
          <h1 className="text-lg md:text-xl font-extrabold pt-2">{title}</h1>
        </div>
    );
};

export default IconCart;