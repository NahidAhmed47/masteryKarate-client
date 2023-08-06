import React from 'react';
import setTitle from '../../../utls/setTitle';
import PagesBanner from '../../../components/PagesBanner/PagesBanner';
import { BsFillEnvelopeFill, BsFillGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import Subscribe from '../../../components/Subscribe/Subscribe';
import useTheme from '../../../hooks/useTheme';

const Contract = () => {
    const {isDarkMode} = useTheme();
    setTitle('Contract')
    return (
        <div className='pt-14 md:pt-40'>
            <PagesBanner img="https://i.ibb.co/2SXWwVN/istockphoto-1480024970-612x612-removebg-preview.png" title="Contact Us"></PagesBanner>
            <div className='max-container grid md:grid-cols-3 gap-4 md:gap-7 lg:gap-10 my-12 md:my-16'>
                <div className={`duration-500 h-[200px] w-full rounded-md ${isDarkMode ? 'border border-gray-700' : 'bg-white'} flex flex-col justify-center items-center group`} style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className={`p-3 border border-dashed border-primary rounded-full group-hover:bg-primary duration-500  ${isDarkMode ? '' : 'bg-white'}`}>
                        <BsFillGeoAltFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsFillGeoAltFill>
                    </div>
                    <h1 className={`text-2xl font-bold duration-500 mt-3 ${isDarkMode ? 'text-gray-200' : 'text-neutral'}`}>Address</h1>
                    <p className='text-gray-400'>32 st Kilda Road, Melbourne VIC, 3004 Australia</p>
                </div>
                <div className={`duration-500 h-[200px] w-full rounded-md ${isDarkMode ? 'border border-gray-700' : 'bg-white'} flex flex-col justify-center items-center group`} style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className={`p-3 border border-dashed border-primary rounded-full group-hover:bg-primary duration-500 ${isDarkMode ? '' : 'bg-white'}`}>
                        <BsFillEnvelopeFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsFillEnvelopeFill>
                    </div>
                    <h1 className={`text-2xl font-bold duration-500 mt-3 ${isDarkMode ? 'text-gray-200' : 'text-neutral'}`}>Email</h1>
                    <p className='text-gray-400'>nahidahmedsd47@gmail.com</p>
                </div>
                <div className={`duration-500 h-[200px] w-full rounded-md ${isDarkMode ? 'border border-gray-700' : 'bg-white'} flex flex-col justify-center items-center group`} style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className={`p-3 border border-dashed border-primary rounded-full group-hover:bg-primary duration-500  ${isDarkMode ? '' : 'bg-white'}`}>
                        <BsTelephoneFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsTelephoneFill>
                    </div>
                    <h1 className={`text-2xl font-bold duration-500 mt-3 ${isDarkMode ? 'text-gray-200' : 'text-neutral'}`}>Phone</h1>
                    <p className='text-gray-400'>(+880)1312397286</p>
                </div>
            </div>
            <div className={`w-full h-fit duration-500 ${isDarkMode ? '' : 'bg-[#f6f5fb]'} p-4 md:p-8 md:py-14 my-32 max-container`}>
                <div className='max-w-[1320px] mx-auto grid md:grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <img src="/public/contact.webp" alt='contractImg' ></img>
                    </div>
                    {/* contact form */}
                    <div className='px-2 md:px-5 '>
                        <form className='space-y-4'>
                            <div className='grid grid-cols-2 gap-4 md:gap-6'>
                                <input type='text' name="name" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Name'></input>
                                <input type='email' name="email" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Email'></input>
                            </div>
                            <div className='grid grid-cols-2 gap-4 md:gap-6'>
                                <input type='text' name="phone" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Phone'></input>
                                <input type='text' name="subject" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Subject'></input>
                            </div>
                            <textarea name="message" className='rounded-md h-40 w-full p-3 md:p-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Message'></textarea>
                            <button type='submit' className='text-white bg-primary w-full py-2 rounded-md  font-medium hover:text-neutral hover:bg-white border border-primary duration-300'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='max-container'>
            <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Contract;