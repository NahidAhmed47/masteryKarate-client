import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 h-fit lg:h-[55vh]  w-full">
      <div className="bg-[url('https://i.ibb.co/SctkR1y/footer-bg.png')] h-fit lg:h-[55vh] w-full flex flex-col justify-between">
        <div className="max-container pt-14 md:pt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-0 p-2 md:p-0">
        <div className="flex flex-col  items-center gap-2">
        <img
          className="w-8 md:w-16"
          src="https://i.ibb.co/TtWvLPx/mastery-karate-logo.png"
          alt=""
        />
        <h1 className="text-xl md:text-3xl font-kanit font-extrabold text-white">
          Mastery<span className="text-primary">Karate</span>
        </h1>
        <p className="text-white md:text-lg mt-3 md:mt-7 ">Address</p>
            <p className="text-secondary max-w-[250px] text-center">
              20 Mercantile Plaza, Suite 546, Fort Worth, TX, 16734, USA
            </p>
      </div>
          <div className="w-full h-full font-kanit pl-4 md:pl-16 border-l border-secondary">
            <h1 className="text-base md:text-2xl font-bold text-white">
              Contract With Us
            </h1>
            <div className="border border-primary w-1/4 mt-2"></div>
            <p className="text-white text-lg mt-3 md:mt-5">Call Us</p>
            <p className="text-secondary mt-2">+1 (823-456-789)</p>
            <p className="text-white text-lg mt-3 md:mt-5 ">Mail Us</p>
            <p className="text-secondary mt-2">example@gmail.com</p>
            <div className="flex items-center gap-3 mt-3 md:mt-5">
              <div className=" w-7 h-7 rounded-full bg-[#f0f2f2] relative flex justify-center items-center group hover:bg-primary duration-500">
                <a href="">
                  <FaFacebookF className="w-3 h-3 text-gray-800 group-hover:text-white"></FaFacebookF>
                </a>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#f0f2f2] relative flex justify-center items-center group hover:bg-primary duration-500">
                <a href="">
                  <FaTwitter className="w-3 h-3 text-gray-800 group-hover:text-white"></FaTwitter>
                </a>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#f0f2f2] relative flex justify-center items-center group hover:bg-primary duration-500">
                <a href="">
                  <FaInstagram className="w-3 h-3 text-gray-800 group-hover:text-white"></FaInstagram>
                </a>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#f0f2f2] relative flex justify-center items-center group hover:bg-primary duration-500">
                <a href="">
                  <FaLinkedinIn className="w-3 h-3 text-gray-800 group-hover:text-white"></FaLinkedinIn>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full font-kanit pl-3 md:px-14 md:border-x border-secondary">
          <h1 className="text-xl md:text-2xl font-bold text-white">
              Quick Links
            </h1>
            <div className="border border-primary w-1/4 mt-2"></div>
            <div className="flex flex-col gap-3 mt-8"> 
                <Link to="/" className="text-base text-secondary">Home</Link>
                <Link to="/" className="text-base text-secondary">About Us</Link>
                <Link to="/" className="text-base text-secondary">Contract</Link>
                <Link to="/" className="text-base text-secondary">Classes</Link>
                <Link to="/" className="text-base text-secondary">Instructor</Link>
                <Link to="/" className="text-base text-secondary">Action</Link>
            </div>
          </div>
          <div className="w-full h-full font-kanit pl-3 md:pl-16">
          <h1 className="text-xl md:text-2xl font-bold text-white">
              Subscribe Now
            </h1>
            <div className="border border-primary w-1/4 mt-2"></div>
            <p className="text-white text-lg mt-2 md:mt-7 ">Get Us In The Inbox And Get The Best Implementation!</p>
            <p className="text-secondary text-base mt-2 md:mt-4 ">When looking at its layout. The point of using Lorem it is a long fact that will be distracted.</p>
            <input type="email" name="" id="" className="w-full rounded-full h-8 md:h-10 px-6 mt-2 md:mt-5 text-secondary bg-white outline-none" placeholder="Enter your email"/>
            <button className="w-full h-8 md:h-10 mt-2 md:mt-5  rounded-full border border-primary text-base font-bold font-kanit bg-primary hover:animate-pulse transition-all duration-300 text-white">Subscribe now</button>
          </div>
        </div>
        <p className="text-white text-base text-center my-4">&#169; All right reserved by <span className="text-primary">MasteryKarate</span></p>
      </div>
    </div>
  );
};

export default Footer;
