import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type PropType = {
    title: String;
}

function SectionHeader(props: PropType) {
    return (
        <div className='border-t-[8px] border-t-green-600'>
            <div className='flex flex-row justify-between border-x-2 border-b-2 p-5 text-green-600' >
                <b className='text-2xl'>{props.title}</b>
                <div className='flex flex-row gap-3'>
                    <div className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center'>
                        <IoIosArrowBack />
                    </div>
                    <div className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center'>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionHeader;