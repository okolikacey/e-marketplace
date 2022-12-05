import Image from 'next/image';
import React from 'react';
import backdrop from '../public/images/backdrop.png'


function About(props) {
    const bg = {
        backgroundImage: `url(${backdrop.src})`,
    }
    return (
        <div className='flex flex-col bg-cover bg-center text-center tracking-[1em] bg-black text-white pt-10 mx-20 px-10' style={bg}>
            <h3>ABOUT NOGIC JQS E-MARKET PLACE</h3>
            <div className='flex flex-row text-3xl justify-between my-20 mx-10'>
                <div className='flex flex-row gap-3 items-center '>
                    <div className='w-[10px] h-[10px] bg-cgreen'></div>
                    <b>TENDERS</b>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-[10px] h-[10px] bg-cgreen'></div>
                    <b>PRODUCTS</b>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-[10px] h-[10px] bg-cgreen'></div>
                    <b>SERVICES</b>
                </div>
            </div>
        </div>
    );
}

export default About;