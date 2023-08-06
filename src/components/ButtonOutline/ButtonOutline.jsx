import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const ButtonOutline = ({text, icon}) => {
    return (
        <button className="w-[135px] h-[40px]  border border-primary rounded-full text-sm font-medium relative overflow-hidden group">
          <div className="flex items-center text-primary justify-center w-full gap-1 z-20 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:text-white duration-500">{text}{icon && <BsArrowRightShort className="w-5 h-5"></BsArrowRightShort>}</div>
          <div className="bg-primary z-[10] absolute top-0 left-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
          <div className="bg-[#212226] z-[9] absolute bottom-0 right-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
        </button>
    );
};

export default ButtonOutline;